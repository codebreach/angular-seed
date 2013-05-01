'use strict';

/* Controllers */

angular.module('app.controllers', []).
  controller('MyCtrl1', ['$scope', 'user', function(scope, user) {
	scope.onclick = function() {
		user.get('user', function(user) {
			scope.user = user;
			scope.$digest();
		});
	};
	scope.save = function() {
		var user_ = scope.user;
		user.save(user_, function(user) {
			scope.user = user;
			scope.$digest();
		});
	};
  }])
  .controller('MyCtrl2', ['$scope', 'request', function() {
  	scope.onclick = function() {
		user.get('user', function(user) {
			scope.user = user;
			scope.$digest();
		});
	};
	scope.save = function() {
		var user_ = scope.user;
		user.save(user_, function(user) {
			scope.user = user;
			scope.$digest();
		});
	};
  }]);