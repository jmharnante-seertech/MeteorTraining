Router.onBeforeAction(Iron.Router.bodyParser.urlencoded({
    extended: false
}));

Router.route('/register', { where: 'server' })
  .post(function () {
  	
  	if ( this.request.method == "OPTIONS" ) {
	    this.response.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
	    this.response.setHeader( 'Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS' );
	    this.response.end( 'Set OPTIONS.' );
	  } else {
	    var request = this.request;
	  	var response = this.response;

	  	console.log("in register")
	  	console.log(this.request);
	  	

		var data = { status: "404", message: "User not found." };
		this.response.setHeader("Access-Control-Allow-Origin", "*" );
		this.response.setHeader( "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		this.response.statusCode = 200;
		this.response.end(JSON.stringify(data));
	  }	
  }
)

// JsonRoutes.add("post", "/register/:id", function (req, res, next) {
//   var id = req.params.id;

//   console.log(id);
//   console.log(req.body);
//   //console.log(res);

//   // JsonRoutes.sendResult(res, {
//   //   data: Posts.findOne(id)
//   // });
// });
  