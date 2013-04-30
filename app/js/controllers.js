'use strict';

/* Controllers */

angular.module('app.controllers', []).
  controller('MyCtrl1', ['$scope', 'user', function(scope, user) {
	scope.sanity = 'santi';
	scope.onclick = function() {
		user.get('user').then(function(users) {
			scope.users = users;
		});
	};
  }])
  .controller('MyCtrl2', [function() {

  }]);