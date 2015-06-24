// create the module and name it App
	var App = angular.module('App', ['ngRoute']);

	// configure our routes
	App.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	App.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	App.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	App.controller('contactController', function($scope) {
		$scope.message = 'Contact me and find out even more awesome things!';
	});