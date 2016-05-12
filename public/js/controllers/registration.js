fobApp.controller('RegistrationController', [
	'$scope',
	'$firebaseAuth',
	'FIREBASE_URL', function ($scope, $firebaseAuth, FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		// Login
		$scope.login = function(){
			$scope.message = "Welcome " + $scope.user.email;
		};

		// register
		$scope.register = function(){
			// createUser
			auth.$createUser({
				email: $scope.user.email,
				password: $scope.user.password
			}).then(function (user) {
				$scope.message = "Welcome " + $scope.user.fname + ", Thank you for registering.";
			}).catch(function (error) {
				$scope.message = error.message;
			})
		};
	}]);
