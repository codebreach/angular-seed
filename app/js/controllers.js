'use strict';

/* Controllers */

angular.module('app.controllers', []).
  controller('MyCtrl1', ['$scope', 'user', function(scope, user) {
  scope.user = user.model.toJSON();
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
  scope.base64 = {array: []};
  scope.clear = function() {
    scope.base64.array.length = 0;
  };
  scope.onclick = function() {
    request.create(scope.request, function(request) {
      scope.request = request;
      scope.$digest();
    });
  };
  scope.upload = function() {
    var object = scope.base64.array[0];
    picture.model.setBinaryFile('data', object.fileName, object.fileType, object.content);
    picture.create({}, function(picture) {
      scope.picture = picture;
      scope.$digest();
    });
  };
}]).controller('LoginCtrl',
  ['$scope', '$rootScope', '$location', 'user', 
   function(scope, rootScope, location, user) {
    var callback = function() {
      scope.$apply(function() {
	location.path('/view1');
      });
    };
    scope.login = function() {
      user.login(scope.username, scope.password, callback);
    };
  }]);
