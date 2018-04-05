import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

//var Future = Npm.require('fibers/future');

Meteor.methods({

	addCarrier: function(data){
		HTTP.call( "POST", Meteor.settings.public.baseUrl + 'addCarrier', {
			'content': JSON.stringify(data)
		},
		function( error, response ) {
			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});
	},

	addFlight: function(data){
		HTTP.call( "POST", Meteor.settings.public.baseUrl + 'addFlight', {
			'content': JSON.stringify(data)
		},
		function( error, response ) {
			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});

		
	},

	addLocation: function(data){
		HTTP.call( "POST", Meteor.settings.public.baseUrl + 'addLocation', {
			'content': JSON.stringify(data)
		},
		function( error, response ) {
			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});
	},

	addPlane: function(data){
		HTTP.call( "POST", Meteor.settings.public.baseUrl + 'addPlane', {
			'content': JSON.stringify(data)
		},
		function( error, response ) {
			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});
	},

	bookFlight: function(){

	},

	getBookings: function(userId){

	},

	getCarriers: function(callback){
		HTTP.call( "GET", Meteor.settings.public.baseUrl + 'getCarriers', {},
		function( error, response ) {

			if (error) {
			  	console.log(error);
			} else {
				callback(JSON.parse(response.content));
			}
		});
	},

	getFlights: function(callback){
		var flightData = [];
		console.log("in get flight")

		HTTP.call( "GET", Meteor.settings.public.baseUrl + 'getFlights', {},
		function( error, response ) {
			
			if (error) {
			  	console.log(error);
			} else {
				console.log("flights resp - " + response);
				callback(JSON.parse(response.content));
			}
		});

	},

	getLocations:function(callback){
		HTTP.call( "GET", Meteor.settings.public.baseUrl + 'getLocations', {},
		function( error, response ) {

			if (error) {
			  	console.log(error);
			} else {
				console.log("loc resp - " + JSON.parse(response.content))
				callback(JSON.parse(response.content));
			}
		});
	},

	getPlanes: function(callback){
		HTTP.call( "GET", Meteor.settings.public.baseUrl + 'getPlanes', {},
		function( error, response ) {

			if (error) {
			  	console.log(error);
			} else {
				callback(JSON.parse(response.content));
			}
		});
	},

	login: function(){
		HTTP.call( "GET", Meteor.settings.public.baseUrl + 'dummylogin', {},
		function( error, response ) {

			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});
	},

	register:function(userDetails){
		console.log("in meteor register")
		console.log("user details - " + userDetails)

		// HTTP.call( "POST", Meteor.settings.public.baseUrl + 'register', {
		// 	'headers': {'content-type':'text/plain'},
		// 	'content':JSON.stringify(userDetails)
		// },
		// function( error, response ) {

		// 	if (error) {
		// 	  console.log(error);
		// 	} else {
		// 	  console.log(response);
		// 	  console.log(JSON.parse(response.content));
		// 	}
		// });

		postData(Meteor.settings.public.baseUrl + 'register', userDetails)
		  .then(data => console.log(data)) // JSON from `response.json()` call
		  .catch(error => console.error(error))

		function postData(url, data) {
		  // Default options are marked with *
		  return fetch(url, {
		    body: JSON.stringify(data), // must match 'Content-Type' header
		    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    credentials: 'same-origin', // include, same-origin, *omit
		    headers: {
		      'user-agent': 'Mozilla/4.0 MDN Example',
		      'content-type': 'application/json'
		    },
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    mode: 'no-cors', // no-cors, cors, *same-origin
		    redirect: 'follow', // *manual, follow, error
		    referrer: 'no-referrer', // *client, no-referrer
		  })
		  .then(response => response.json()) // parses response to JSON
		}
	}	
})