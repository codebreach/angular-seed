'use strict';

/* Controllers */

angular.module('app.controllers', []).
  controller('MyCtrl1', ['$scope', 'user', function(scope, user) {
	scope.sanity = 'santi';
	scope.onclick = function() {
		user.get('user', function(user) {
			scope.user = user;
			scope.$digest();
		});
	};
	scope.save = function() {
		var usero = scope.user;
		usero.name = 'John';
		user.save(usero, function(user) {
			scope.user = user;
			scope.$digest();
		});
	}
  }])
  .controller('MyCtrl2', [function() {
  }]);