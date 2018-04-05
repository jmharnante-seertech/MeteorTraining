from BookingApp import app
import json

def create_response(json_data):
	print type(json_data)
	if json_data is not isinstance(json_data, dict):
		json_data = json.dumps(json_data)

	response = app.response_class(
        response=json_data,
        status=200,
        mimetype='application/json'
    )
	return response