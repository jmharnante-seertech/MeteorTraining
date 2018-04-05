from BookingApp import app
from flask import request
from BookingApp.utils import response_utils as rp
from BookingApp.utils import db_utils as dbu
import json


@app.route('/addPlane', methods=['POST'])
def add_plane():
    data = json.loads(request.data)
    
    if 'planeName' in data:
    	dbu.insert_one({
    		'planeName': data['planeName'],
    		'planeNumber': data['planeNumber'],
            'planeType': data['planeType'],
            'seatingCapacity': data['seatingCapacity']
    	}, 'planes')


    return rp.create_response({})

@app.route('/getPlanes')
def get_planes():
    data = dbu.find({}, 'planes')

    return rp.create_response(data)