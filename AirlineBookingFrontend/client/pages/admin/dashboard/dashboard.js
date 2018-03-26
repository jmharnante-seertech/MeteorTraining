Template.adminDashboard.events({
  'submit .new-flight' (event) {
    event.preventDefault();
    const target = event.target

    const flightNumber = target.flightNumber.value
    const aircraftNumber = target.aircraftNumber.value
    const fromLocation = target.fromLocation.value
    const toLocation = target.toLocation.value
    const depDate = target.depDate.value
    const depTime = target.depTime.value
    const seats = target.seats.value
    const price = target.price.value

    //Meteor.call('flights.addFlight',flightNumber, aircraftNumber, fromLocation, toLocation, depDate, depTime, seats, price);
  },
})

Template.adminDashboard.helpers({
  getFlights() {
    return [];
  },

  getLocations(){
  	return [];
  },

  getCarriers(){
    return{};
  }
})