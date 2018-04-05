Template.customerDashboard.events({


})


Template.customerDashboard.helpers({

  getCarriers(){
    return{};
  },

  getFlights() {
    return [
            {
            "_id": "kHvamapSkhjqDEmks",
            "flightNumber": "0001",
            "carrierId": 1,
            "planeId": 1,
            "fromLocation": 1,
            "toLocation": 1,
            "depDate": 1,
            "depTime": 1
            },
            {
            "_id": "kHvamapSkhjqDEmks",
            "flightNumber": "0002",
            "carrierId": 1,
            "planeId": 1,
            "fromLocation": 1,
            "toLocation": 1,
            "depDate": 1,
            "depTime": 1
            }
          ];
  },

  getLocations(){
  	return [];
  }
})