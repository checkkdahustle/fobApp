fobApp.controller('CausesController', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

/*

users path - 'firebase/users/' + authData.uid
users causes path - 'firebase/users/' + authData.uid + '/cause'
^^^ this is a collection of firebase ids when a cause is created
cause path - 'firebase/cause/' <== this has a firebase ID
cause owner ID - 'firebase/cause/' + firebasedata.key + '/owner'

*/

/*


√ $routeProvider.when('/users/:userID', {

√	templateUrl: 'yourView.html',
√	controller: yourCtrl
})

in yourCtrl >
√ $routeParams into the controller($scope, etc, etc)

√ firebaseURL = blah/users/$routeParams.userID

now you have his info


*/



	auth.$onAuth(function(authUser) {
		if (authUser) {
			// var causesRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/causes');
			//console.log('auth info', authUser)
			//console.log('rootscope stuff', $scope.currentUser)
			var causesRef = new Firebase(FIREBASE_URL + '/causes');
			var causesInfo = $firebaseArray(causesRef);
			$scope.causes = causesInfo;

			causesInfo.$loaded().then(function(data){
				$rootScope.howManyCauses = causesInfo.length;
			}); // making sure cause data is loaded.

			causesInfo.$watch(function(data){
				$rootScope.howManyCauses = causesInfo.length;
			}); // watches loaded data and count to length to badge.


			$scope.addCause = function() {
				causesInfo.$add({
					name: $scope.causeName,
					ownerName:  $scope.currentUser.firstName + " " +  $scope.currentUser.lastName,
					ownerID:  $scope.currentUser.$id,
					date: Firebase.ServerValue.TIMESTAMP
				})
				.then(function(ref) {
					var key = ref.key();
					console.log("Added: ", key);
					$scope.currentUser.causes[key] = $scope.causeName;
					$scope.currentUser.$save().then(function(ref) {
					  key === $scope.currentUser.$id; // true
						$scope.causeName='';
						console.log("it works!")
					}, function(error) {
					  console.log("Error:", error);
					}); // error
				}); // close Promise
			}; // close 'Add Cause' function.

			$scope.deleteCause = function(key) {
				causesInfo.$remove(key);
			}; // close 'delete Cause' function.

		} // close 'User Authentication' if statement.
	}); // close 'on Auth' Authentication function.

}]); // close CausesController.
