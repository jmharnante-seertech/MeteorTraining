import { Template } from 'meteor/templating';

import '../imports/routes/routes.js'
import '../imports/methods/methods.js'
import './main.html';

Meteor.startup(() => {
   //render(<App />, document.getElementById('render-target'));
   Router.go('/')
});