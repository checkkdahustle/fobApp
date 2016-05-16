fobApp.controller('CheckinsController', ['$scope', '$rootScope', '$location', '$firebaseObject', '$firebaseArray', '$routeParams', 'FIREBASE_URL', function ($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {

	$scope.whichcause = $routeParams.mId;
	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/causes/' + $scope.whichcause + '/checkins' );

	var checkinsList = $firebaseArray(ref);
	$scope.checkins = checkinsList;

	$scope.addCheckin = function() {
		var checkinsInfo = $firebaseArray(ref);
		var myData = {
			firstName: $scope.user.fname,
			lastName: $scope.user.lname,
			email: $scope.user.email,
			date: Firebase.ServerValue.TIMESTAMP
		}; // close 'myData' varaible.

		checkinsInfo.$add(myData).then(function() {
			$location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichcause + '/checkinsList');

		});// Promise to redirect after checkin.(Send data to Firebase)

	}; // close 'Add Checkin' function.

	$scope.deleteCheckin = function(id) {
		var refDel = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/causes/' + $scope.whichcause + '/checkins/' + id);
		var record = $firebaseObject(refDel);
		record.$remove(id);
	};// deleteCheckin


}]); // close CheckinsController.
