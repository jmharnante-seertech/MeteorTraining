from BookingApp import app
from flask import request
from BookingApp.utils import response_utils as rp
from BookingApp.utils import db_utils as dbu
import json


@app.route('/addLocation', methods=['POST'])
def add_location():
    data = json.loads(request.data)
    
    if 'locationName' in data:
    	dbu.insert_one({
    		'locationName': data['locationName'],
    		'locationCode': data['locationCode'],
    		'country': data['country']
    	}, 'locations')


    return rp.create_response({})

@app.route('/getLocations')
def get_locations():
    data = dbu.find({}, 'locations')

    return rp.create_response(data)