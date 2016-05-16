fobApp.controller('CausesController', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	auth.$onAuth(function(authUser) {
		if (authUser) {
			var causesRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/causes');
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
					date: Firebase.ServerValue.TIMESTAMP
				}).then(function() {
					$scope.causeName='';
				}); // close Promise
			}; // close 'Add Cause' function.

			$scope.deleteCause = function(key) {
				causesInfo.$remove(key);
			}; // close 'delete Cause' function.

		} // close 'User Authentication' if statement.
	}); // close 'on Auth' Authentication function.

}]); // close CausesController.
