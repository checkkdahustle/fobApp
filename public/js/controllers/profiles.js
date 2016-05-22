fobApp.factory('ProfileController', ['$routeParams', '$rootScope', '$firebaseAuth', '$firebaseObject', '$location', 'FIREBASE_URL', function ($routeParams, $rootScope, $firebaseAuth, $firebaseObject, $location, FIREBASE_URL) {

	$scope.whichuser = $routeParams.uId;

	var ref = new Firebase(FIREBASE_URL + '/users/' + $scope.whichuser);
	var auth = $firebaseAuth(ref);



}]); // close factory
