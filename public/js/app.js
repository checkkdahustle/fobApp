// dependencies for the modules will go inside of the array for it to work.
var fobApp = angular.module('fobApp' , ['ngRoute','firebase'])
.constant('FIREBASE_URL', 'https://fobapp.firebaseio.com/');

// Create an Controller, dependencies is inside of the arrary.nremember, Scope give us access to the view or template.
fobApp.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/success', {
			templateUrl: 'views/success.html',
			controller: 'SuccessController'
		}).
		otherwise({
			redirectTo: '/login'
		});

}]);
