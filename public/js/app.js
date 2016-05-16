var fobApp = angular.module('fobApp' , ['ngRoute','firebase', 'ngProgress'])
.constant('FIREBASE_URL', 'https://foblivemeeting.firebaseio.com/'); // dependencies for the modules will go inside of the array for it to work.

fobApp.run(['$rootScope', '$location', function($rootScope, $location) {
	$rootScope.$on('$routeChangeError', function(event, next, previous, error) {
		if (error =='AUTH_REQUIRED') {
			$rootScope.message = 'Sorry, you must login to access that page.';
			$location.path('#/login');
		} // close AUTH REQUIRED
	}); // close event info
}]); // close run

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
		when('/checkins/:uId/:mId', {
			templateUrl: 'views/checkins.html',
			controller: 'CheckinsController'
		}).
		when('/causes', {
			templateUrl: 'views/causes.html',
			controller: 'CausesController',
			resolve: {
				currentAuth: function (Authentication) {
					return Authentication.requireAuth();

				}
			}
		}).
		otherwise({
			redirectTo: '/login'
		});

}]); // Create an Controller, dependencies is inside of the arrary.nremember, Scope give us access to the view or template.
