import { Mongo } from 'meteor/mongo';

export const Flights = new Mongo.Collection('flights');

Meteor.methods({
  'flight.addFlight'(flightNumber, carrierId, planeId, fromLocation, toLocation, depDate, depTime, price) {
      var flightDetails = {
        flightNumber: flightNumber,
        carrierId: carrierId,
        planeId: planeId,
        fromLocation: fromLocation,
        toLocation: toLocation,
        depDate: depDate,
        depTime: depTime,
        price: price
      }

      Flights.insert(flightDetails)
    },
  'flight.getFlights'(){

    console.log("in flight.getflights")
    return Flights.find({}).fetch();
  }
})