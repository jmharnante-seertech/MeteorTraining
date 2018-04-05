
Router.route('/addFlight', {'where':'server'})
	.get(function(){

		if ( this.request.method == "OPTIONS" ) {
		    this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
		    this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
		    this.response.end( 'Set OPTIONS.' );
		} else {
			var request = this.request;
			var response = this.response;

			console.log("in add flight")
			
			Meteor.call('flight.addFlight','0001', 1, 1, 1, 1, 1, 1);

			var data = { status: "200", message: "Flight added." };
			this.response.setHeader("Access-Control-Allow-Origin", "*" );
			this.response.setHeader( "Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept");
			this.response.statusCode = 200;
			this.response.end(JSON.stringify(data));
		}

	})

Router.route('/getFlights', {'where':'server'})
	.get(function(){

		if ( this.request.method == "OPTIONS" ) {
		    this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
		    this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
		    this.response.end( 'Set OPTIONS.' );
		} else {
			var request = this.request;
			var response = this.response;

			console.log("in get flight")

			var data = { status: "200", message: "get flights." , content:Meteor.call('flight.getFlights')};
			this.response.setHeader("Access-Control-Allow-Origin", "*" );
			this.response.setHeader( "Access-Control-Allow-Headers", "Origin, X-Requested-With, content-type, Accept");
			this.response.statusCode = 200;
			this.response.end(JSON.stringify(data));
		}

	})