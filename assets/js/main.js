var app = angular.module('backflipGirl', ['ngRoute']);

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'templates/index.html',
			controller: 'IndexCtrl'
		}).
		when('/comic/:comicId', {
			templateUrl: 'templates/comic.html',
			controller: 'ComicCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]);


/*
 *
 */
app.controller('Index', function($scope) {
  $scope.msg = 'Hello, AngularJS!';
});

/*
 *
 */
app.controller('Comic', function($scope, $routeParams) {
  $scope.msg = 'Hello, AngularJS!';
});
