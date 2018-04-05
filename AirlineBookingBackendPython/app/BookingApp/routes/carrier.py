from BookingApp import app
from flask import request
from BookingApp.utils import response_utils as rp
from BookingApp.utils import db_utils as dbu
import json


@app.route('/addCarrier', methods=['POST'])
def add_carrier():
    data = json.loads(request.data)
    
    if 'carrierName' in data:
    	dbu.insert_one({
    		'carrierName': data['carrierName'],
    		'planeCount': 0,
    		'planes': []
    	}, 'carriers')


    return rp.create_response({})

@app.route('/getCarriers')
def get_carriers():
    data = dbu.find({}, 'carriers')

    return rp.create_response(data)