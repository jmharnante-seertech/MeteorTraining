import { Meteor } from 'meteor/meteor'
import { Router } from 'meteor/iron:router'

import "../../client/pages/landing/landing.js"
import "../../client/pages/admin/dashboard/dashboard.js"
import "../../client/pages/customer/dashboard/dashboard.js"

Router.route('/', {
	name: 'landing',
	layoutTemplate: 'landing',
	onBeforeAction : function(){
		this.render('landing', {});
	}
});

Router.route('/admin/dashboard',{
	name: 'adminDashboard',
	layoutTemplate: 'adminDashboard',
	onBeforeAction: function(){
		this.render('adminDashboard', {});
	}
});

Router.route('/customer/dashboard',{
	name: 'customerDashboard',
	layoutTemplate: 'customerDashboard',
	onBeforeAction: function(){
		this.render('customerDashboard', {});
	}
});