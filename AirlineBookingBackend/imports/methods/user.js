import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

Meteor.methods({
  'user.addUser'(username, password) {
      
      var userDetails = {
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName
      }

      Users.insert(userDetails)
    }
})