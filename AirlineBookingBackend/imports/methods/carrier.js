import { Mongo } from 'meteor/mongo';

export const Carriers = new Mongo.Collection('carriers');

Meteor.methods({
  'carrier.addCarrier'(carrierName) {
      var carrierDetails = {
        carrierName: carrierName,
        planes: []
      }

      Carriers.insert(carrierDetails)
    }
})