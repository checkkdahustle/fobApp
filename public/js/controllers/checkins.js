fobApp.controller('CheckinsController', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', '$routeParams', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {
	$scope.whichcause = $routeParams.mId;
	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/causes/' + $scope.whichcause + '/checkins' );

	$scope.addCheckin = function() {
		var checkinsInfo = $firebaseArray(ref);
		var myData = {
			firstName: $scope.user.fname,
			lastName: $scope.user.lname,
			email: $scope.user.email,
			date: Firebase.ServerValue.TIMESTAMP
		}; // close 'myData' varaible.

		checkinsInfo.$add(myData);

	}; // close 'Add Checkin' function.


}]); // close CheckinsController.
