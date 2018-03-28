import { Mongo } from 'meteor/mongo';

export const Locations = new Mongo.Collection('locations');

Meteor.methods({
  'locations.addLocation'(locationName, locationCode, country) {
      var locationDetails = {
        locationName: locationName,
        locationCode: locationCode,
        country: country
      }

      Locations.insert(locationDetails)
    }
})