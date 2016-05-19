fobApp.controller('CheckinsController', ['$scope', '$rootScope', '$location', '$firebaseObject', '$firebaseArray', '$routeParams', 'FIREBASE_URL', function ($scope, $rootScope, $location, $firebaseObject, $firebaseArray, $routeParams, FIREBASE_URL) {

	$scope.whichcause = $routeParams.mId;
	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/causes/' + $scope.whichcause + '/checkins' ); //path to all the user's cause, live chat or event checkin.
	// var ref = new Firebase(FIREBASE_URL + 'causes/' + $scope.whichcause + '/checkins' );

	var checkinsList = $firebaseArray(ref);
	$scope.checkins = checkinsList;

	$scope.order = "firstName";
	$scope.direction = null;
	$scope.query = '';
	$scope.recordId = '';

	$scope.addCheckin = function() {
		var checkinsInfo = $firebaseArray(ref);
		var myData = {
			firstName: $scope.user.fname,
			lastName: $scope.user.lname,
			email: $scope.user.email,
			date: Firebase.ServerValue.TIMESTAMP
		}; // close 'myData' varaible of users info.

		checkinsInfo.$add(myData).then(function() {
			$location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichcause + '/checkinsList');
		});// Promise to redirect after checkin.(Send data to Firebase)
	}; // close 'Add Checkin' function.

	$scope.deleteCheckin = function(id) {
		var refDel = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/causes/' + $scope.whichcause + '/checkins/' + id);
		var record = $firebaseObject(refDel);
		record.$remove(id);
	};// deleteCheckin

	$scope.pickRandom = function() {
		var whichRecord = Math.round(Math.random()* (checkinsList.length - 1)); // pick a random number from 0 to checkinsList -1.
		$scope.recordId = checkinsList.$keyAt(whichRecord);
	}// Function that picks a random users.

	$scope.showLove = function(myCheckin) {
		myCheckin.show = !myCheckin.show;

		if (myCheckin.userState == 'expanded') {
			myCheckin.userState = '';
		}else {
			myCheckin.userState = 'expanded';
		}
	} // close 'Show Love' function toggle.


}]); // close CheckinsController.
