Template.adminDashboard.onRendered(function(){
    Meteor.call('getCarriers', function(result){
      var parsedResult = [];
      result.forEach(function(item,index){
        var parsedItem = JSON.parse(item);
        parsedItem['_id'] = parsedItem['_id']['$oid']
        parsedResult.push(parsedItem);

      })
      Session.set('carriers', parsedResult)

    }, function(error, result){

    })

    Meteor.call('getFlights', function(result){
      var parsedResult = [];
      console.log(result)
      result.forEach(function(item,index){
        var parsedItem = JSON.parse(item);
        parsedItem['_id'] = parsedItem['_id']['$oid']
        parsedResult.push(parsedItem);

      })
      Session.set('flights', parsedResult)

    }, function(error, result){

    })

    Meteor.call('getLocations', function(result){
      var parsedResult = [];
      result.forEach(function(item,index){
        var parsedItem = JSON.parse(item);
        parsedItem['_id'] = parsedItem['_id']['$oid']
        parsedResult.push(parsedItem);

      })

      Session.set('locations', parsedResult)

    }, function(error, result){

    })

    Meteor.call('getPlanes', function(result){
      var parsedResult = [];
      result.forEach(function(item,index){
        var parsedItem = JSON.parse(item);
        parsedItem['_id'] = parsedItem['_id']['$oid']
        parsedResult.push(parsedItem);

      })
      Session.set('planes', parsedResult)

    }, function(error, result){

    })
});

Template.adminDashboard.events({
  'submit .new-carrier' (event) {
    event.preventDefault();
    const target = event.target

    const carrierName = target.carrierName.value
    Meteor.call('addCarrier',{ 
      'carrierName': carrierName
    }, function(error, result){

    })
  },

  'submit .new-flight' (event) {
    event.preventDefault();
    const target = event.target

    const flightNumber = target.flightNumber.value
    const carrier = target.carrier.value
    const fromLocation = target.fromLocation.value
    const toLocation = target.toLocation.value
    const depDate = target.depDate.value
    const depTime = target.depTime.value
    const price = target.price.value

    //Meteor.call('flights.addFlight',flightNumber, aircraftNumber, fromLocation, toLocation, depDate, depTime, seats, price);
    console.log("depDate - " + depDate)
    console.log("carrier - " + carrier)
    Meteor.call('addFlight',{ 
      'flightNumber': flightNumber,
      'carrier': carrier,
      'fromLocation': fromLocation,
      'toLocation': toLocation,
      'depDate': depDate,
      'depTime': depTime,
      'price': price

    }, function(error, result){

    })
  },

  'submit .new-location' (event) {
    event.preventDefault();
    const target = event.target

    const locationName = target.locationName.value
    const locationCode = target.locationCode.value
    const country = target.country.value

    Meteor.call('addLocation',{ 
      'locationName': locationName,
      'locationCode': locationCode,
      'country': country
    }, function(error, result){

    })
  },

  'submit .new-plane' (event) {
    event.preventDefault();
    const target = event.target

    const planeName = target.planeName.value
    const planeNumber = target.planeNumber.value
    const planeType = target.planeType.value
    const seatingCapacity = target.seatingCapacity.value

    Meteor.call('addPlane',{ 
      'planeName': planeName,
      'planeNumber':planeNumber,
      'planeType':planeType,
      'seatingCapacity':seatingCapacity
    }, function(error, result){

    })
  }


})

Template.adminDashboard.helpers({
  loadCarriers(){
    return Session.get('carriers');

  },

  loadFlights() {

    return Session.get('flights');

    // return [
    //         {
    //         "_id": "kHvamapSkhjqDEmks",
    //         "flightNumber": "0001",
    //         "carrierId": 1,
    //         "planeId": 1,
    //         "fromLocation": 1,
    //         "toLocation": 1,
    //         "depDate": 1,
    //         "depTime": 1
    //         },
    //         {
    //         "_id": "kHvamapSkhjqDEmks",
    //         "flightNumber": "0002",
    //         "carrierId": 1,
    //         "planeId": 1,
    //         "fromLocation": 1,
    //         "toLocation": 1,
    //         "depDate": 1,
    //         "depTime": 1
    //         }
    //       ];
  },

  loadLocations(){
  	return Session.get('locations');
  },

  loadPlanes(){
    return Session.get('planes');
  },

  
})