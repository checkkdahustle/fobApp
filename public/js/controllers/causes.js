fobApp.controller('CausesController', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL);
	var auth = $firebaseAuth(ref);

	auth.$onAuth(function(authUser) {
		if (authUser) {
			var causesRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/causes');
			var causesInfo = $firebaseArray(causesRef);
			$scope.causes = causesInfo;

			$scope.addCause = function() {
				causesInfo.$add({
					name: $scope.causeName,
					date: Firebase.ServerValue.TIMESTAMP
				}).then(function() {
					$scope.causeName='';
				}); // close Promise

			}; // close 'Add Cause' function.
		} // close 'User Authentication' if statement.
	}); // close 'on Auth' Authentication function.

}]); // close CausesController.
