'use strict';

/**
 * @ngdoc overview
 * @name konradApp
 * @description
 * # konradApp
 *
 * Main module of the application.
 */
angular
	.module('konradApp', [
		'ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				title        : 'Welcome',
				templateUrl  : 'views/main.html',
				controller   : 'MainCtrl',
				controllerAs : 'main'
			})
			.when('/about', {
				title        : 'About',
				templateUrl  : 'views/about.html',
				controller   : 'AboutCtrl',
				controllerAs : 'about'
			})
			.when('/projects', {
				title        : 'Projects',
				templateUrl  : 'views/projects.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/contact', {
				title        : 'Contact',
				templateUrl  : 'views/contact.html',
				controller   : 'ContactCtrl',
				controllerAs : 'contact'
			})
			.otherwise({
				redirectTo : '/'
			});
	});
