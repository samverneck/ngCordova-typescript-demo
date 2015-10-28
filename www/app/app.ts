/// <reference path="_references.ts"/>

namespace demo {
	'use strict';
	
	var dependencies = [
		'ionic',
		'ngCordova',
		'demo.device'
  	];

	angular.module('demo', dependencies)
	
	.run(function($ionicPlatform, $window) {
		
		$ionicPlatform.ready(function() {
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if ($window.cordova && $window.cordova.plugins.Keyboard) {
				$window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if ($window.StatusBar) {
				$window.StatusBar.styleDefault();
			}
		});
	})
	
	.config(function($stateProvider, $urlRouterProvider) {
	
		$urlRouterProvider.otherwise('/layout');
	
		$stateProvider.state('layout', {
				url: "/layout",
				templateUrl: "app/layout/layout.html"
			})
	
		.state('about', {
			url: "/about",
			templateUrl: "app/about/about.html"
		});
	
	});
	
}