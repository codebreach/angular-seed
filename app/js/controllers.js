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
  }]).
  controller('MyCtrl2', 
    ['$scope', 'request', 'picture', function(scope, request, picture) {
  
  scope.onclick = function() {
    request.create(scope.request, function(request) {
      scope.request = request;
      scope.$digest();
    });
  };
  scope.upload = function() {
    picture.create(scope.picture, function(picture) {
      scope.picture = picture;
      scope.$digets();
    });
  };
}]);
