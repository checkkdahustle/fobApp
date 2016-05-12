fobApp.controller('RegistrationController', [
	'$scope',
	'Authentication',
	function ($scope, Authentication) {

		$scope.login = function(){
			Authentication.login($scope.user);
		}; // close Login from Authentication

		$scope.register = function(){
			Authentication.register($scope.user);
		}; // close register from Authentication

	}]); // close Registration Controller function.
