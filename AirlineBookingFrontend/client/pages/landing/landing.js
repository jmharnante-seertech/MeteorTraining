import axios from 'axios';

Session.setDefault('form', '');

Template.landing.helpers({
	checkLogin(x){
		if(x==1){
			return true;
		}
		else{
			return false;
		}
	},
	form: function(form){
        return Session.equals('form', form)
    }
})

Template.signupTemplate.events({
  'submit #signupForm' (event) {
    event.preventDefault();
    const target = event.target

    const username = target.username.value
    const password = target.password.value
    const firstName = target.firstName.value
    const lastName = target.lastName.value

    console.log('content - ' + JSON.stringify({
				'username': username,
				'password': password,
				'firstName': firstName,
				'lastName': lastName
			}))

	Meteor.call('register',{	
		'username': username,
		'password': password,
		'firstName': firstName,
		'lastName': lastName
	}, function(error, result){

	})

	// axios.post(Meteor.settings.public.baseUrl + 'register', {
	//     'username': username,
	// 	'password': password,
	// 	'firstName': firstName,
	// 	'lastName': lastName
	// })
	// .then(function (response) {
	//     console.log(response);
	// })
	// .catch(function (error) {
	//     console.log(error);
	// });
  },
  
})

Template.loginTemplate.events({
	'submit #loginForm'(event){
		event.preventDefault();

		const target = event.target;
		const username = target.username.value;

		if(username == "user1"){
			Router.go('/admin/dashboard');
		}
		else{
			Router.go('/customer/dashboard');
		}

		
	}
})

Template.landingOptions.events({
    'click .clickChangesForm': function(event, template){
        Session.set('form', event.currentTarget.getAttribute('value'))
    }
})

Template.accountMenu.events({
	'click #signout': function(){
		Router.go('landing');
	}
})

