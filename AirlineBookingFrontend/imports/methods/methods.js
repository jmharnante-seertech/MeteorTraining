import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

Meteor.methods({

	addCarrier: function(){

	},

	addFlight: function(){

	},

	addLocation: function(){

	},

	bookFlight: function(){

	},

	getCarriers: function(){

	},

	getFlights: function(){

	},

	getLocations:function(){

	},

	login: function(){

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