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
				}).then(function (rUser) {

					var rRef = new Firebase(FIREBASE_URL + 'users')
					.child(rUser.uid).set({
						date: Firebase.ServerValue.TIMESTAMP,
						regUser: rUser.uid,
						firstName: user.fname,
						lastName: user.lname,
						email: user.email
					}); // users and or donators info stored in DB.



					$rootScope.message = "Hello " + user.fname + ", Thank you for registering.";
				}).catch(function (error) {
					$rootScope.message = error.message;
				}); // close createUser auth function
			} // close register return
		}; // close return function

	}]); // close factory
