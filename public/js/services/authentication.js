fobApp.factory('Authentication', ['$rootScope', '$firebaseAuth', 'FIREBASE_URL', function ($rootScope, $firebaseAuth, FIREBASE_URL) {
	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	return{
		login: function (user) {
			$rootScope.message = "Welcome " + $scope.user.email;
		}, // close login return

		register: function(user) {
			auth.$createUser({
				email: user.email,
				password: user.password
			}).then(function (user) {
				$rootScope.message = "Welcome " + user.fname + ", Thank you for registering.";
			}).catch(function (error) {
				$rootScope.message = error.message;
			}); // close createUser auth function
		} // close register return
	}; // close return function

}]); // close factory





fobApp.controller('RegistrationController', [
	'$scope',
	'$firebaseAuth',
	'FIREBASE_URL', function ($scope, $firebaseAuth, FIREBASE_URL) {
