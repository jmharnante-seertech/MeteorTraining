from BookingApp import app
from flask import request
from BookingApp.utils import response_utils as rp
from BookingApp.utils import db_utils as dbu
import json


@app.route('/addFlight', methods=['POST'])
def add_flight():
    data = json.loads(request.data)
    
    if 'flightNumber' in data:
    	dbu.insert_one({
    		'flightNumber': data['flightNumber'],
    		'carrier': data['carrier'],
    		'fromLocation': data['fromLocation'],
    		'toLocation': data['toLocation'],
    		'depDate': data['depDate'],
    		'depTime': data['depTime'],
    		'price': data['price'],
    	}, 'flights')

    
    return rp.create_response({})

@app.route('/getFlights')
def get_flights():
    data = dbu.find({}, 'flights')
    
    return rp.create_response(data)