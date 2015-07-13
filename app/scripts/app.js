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
				templateUrl  : 'views/about/index.html',
				controller   : 'AboutCtrl',
				controllerAs : 'about'
			})
			.when('/projects/current', {
				title        : 'Projects',
				templateUrl  : 'views/projects/current.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/projects/java', {
				title        : 'Projects',
				templateUrl  : 'views/projects/java.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/projects/cplusplus', {
				title        : 'Projects',
				templateUrl  : 'views/projects/cplusplus.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/projects/photoshop', {
				title        : 'Projects',
				templateUrl  : 'views/projects/photoshop.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/projects/flash', {
				title        : 'Projects',
				templateUrl  : 'views/projects/flash.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/projects/other', {
				title        : 'Projects',
				templateUrl  : 'views/projects/other.html',
				controller   : 'ProjectsCtrl',
				controllerAs : 'projects'
			})
			.when('/contact', {
				title        : 'Contact',
				templateUrl  : 'views/contact/index.html',
				controller   : 'ContactCtrl',
				controllerAs : 'contact'
			})
			.otherwise({
				redirectTo : '/'
			});
	});
