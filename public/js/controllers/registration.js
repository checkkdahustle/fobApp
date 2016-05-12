fobApp.controller('RegistrationController', [
	'$scope',
	'$firebaseAuth',
	'FIREBASE_URL', function ($scope, $firebase, FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		$scope.login = function(){
			$scope.message = "Welcome " + $scope.user.email;
		};

		$scope.register = function(){
			$scope.message = "Welcome " + $scope.user.fname;
		};
	}]);
