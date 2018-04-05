from pymongo import MongoClient
import json
from bson import json_util

database_name = 'bookingapp'

def get_client():
	return MongoClient();

def get_database():
	client = get_client()
	print database_name
	db = client[database_name]
	return db

def create_collection(collection_name):
	db = get_database()
	return db[collection_name]

def get_collection(collection_name):
	db = get_database()
	return db.get_collection(collection_name)

def insert_one(data, collection_name):
	print "insert_one"
	collection = get_collection(collection_name)
	collection.insert_one(data)

def find(query, collection_name):
	collection = get_collection(collection_name)
	return [json.dumps(doc, default=json_util.default) for doc in collection.find(query)]
