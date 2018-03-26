import { Mongo } from 'meteor/mongo';

export const Planes = new Mongo.Collection('planes');

Meteor.methods({
  'plane.addPlane'(planeName, planeNumber, planeType, seatingCapacity) {
      var planeDetails = {
        planeName: planeName,
        planeNumber: planeNumber,
        planeType: planeType,
        seatingCapacity: seatingCapacity
      }

      Planes.insert(planeDetails)
    }
})