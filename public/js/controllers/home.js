fobApp.controller('HomeController', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL){

	$scope.active = 0;
	// $scope.myInterval = 5000;
	// $scope.noWrapSlides = false;
	// $scope.noPause = false;
	// $scope.noTransition = false;

	$scope.slides = [
		{
			image: '/css/images/slider/ary_halway.jpg',
			text: '',
			id: 0
			// width: 200
		},
		{
			image: '/css/images/slider/girl.jpg',
			text: '',
			id: 1
		},
		{
			image: '/css/images/slider/pineridge62-2.jpg',
			text: '',
			id: 2
		},
		{
			image: '/css/images/slider/Kid-gang.jpg',
			text: '',
			id: 3
		}
	];

}]);





// var slides = []

// var currIndex = 0;

// $scope.flipSlide = function() {
//   var imgSize = 600 + slides.length + 1;
//   slides.push({
//     image: 'http://lorempixel.com/' + imgSize + '/300',
//     text: ['Nice image','Awesome photograph','That is so cool','I love that'][slides.length % 4],
//     id: currIndex++
//   });
// };

// $scope.randomize = function() {
//   var indexes = generateIndexesArray();
//   assignNewIndexesToSlides(indexes);
// };

// for (var i = 0; i < 4; i++) {
//   $scope.flipSlide();
// }

// Randomize logic below

// function assignNewIndexesToSlides(indexes) {
//   for (var i = 0, l = slides.length; i < l; i++) {
//     slides[i].id = indexes.pop();
//   }
// }

// function generateIndexesArray() {
//   var indexes = [];
//   for (var i = 0; i < currIndex; ++i) {
//     indexes[i] = i;
//   }
//   // return shuffle(indexes);
// }

// http://stackoverflow.com/questions/962802#962890
// function shuffle(array) {
// var tmp, current, top = array.length;

// if (top) {
//   while (--top) {
//     current = Math.floor(Math.random() * (top + 1));
//     tmp = array[current];
//     array[current] = array[top];
//     array[top] = tmp;
//   }
// }

// return array;
// }
// });
