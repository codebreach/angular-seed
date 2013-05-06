'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'app.services', 'app.directives', 'app.controllers']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', 
			{templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
    $routeProvider.when('/view2', 
			{templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
    $routeProvider.when('/login', 
			{templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
    $routeProvider.otherwise({redirectTo: '/login'});
  }]).
  config([function() {
  /* <![CDATA[ */
      StackMob.init({
        publicKey: publicKey,
        apiVersion: 0,
	secure: StackMob.ALWAYS
      });
    /* ]]> */
  }]);
