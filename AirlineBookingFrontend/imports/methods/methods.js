import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';

Meteor.methods({

	register:function(userDetails){
		console.log("in meteor register")
		console.log("user details - " + userDetails)

		HTTP.call( "POST", Meteor.settings.public.baseUrl + 'register', {
			'headers': {'content-type':'text/plain'},
			'data':JSON.stringify(userDetails)
		},
		function( error, response ) {

			if (error) {
			  console.log(error);
			} else {
			  console.log(response);
			  console.log(JSON.parse(response.content));
			}
		});
	}	
})