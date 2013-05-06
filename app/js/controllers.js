'use strict';

/* Controllers */

angular.module('app.controllers', []).
controller('MyCtrl1', ['$scope', 'user', function(scope, user) {
  console.log('view 1 controller loaded');
  scope.user = user.model.toJSON();
  scope.onclick = function() {
    console.log('button click');
    user.get('user', function(user) {
      scope.user = user;
      scope.$digest();
    });
  };
  scope.save = function() {
    console.log('save button click');
    var user_ = scope.user;
    user.save(user_, function(user) {
      scope.user = user;
      scope.$digest();
    });
  };
  }]).
controller('MyCtrl2', 
    ['$scope', 'request', 'picture', function(scope, request, picture) {
  console.log('view 2 controller loaded');
  scope.base64 = {array: []};
  scope.clear = function() {
    scope.base64.array.length = 0;
  };
  scope.onclick = function() {
    console.log('button click');
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
}]).
controller('LoginCtrl',
  ['$scope', '$rootScope', '$location', 'user', 
   function(scope, rootScope, location, user) {
    console.log('login controller loaded');
    var callback = function() {
      console.log('login callback');
      scope.$apply(function() {
	location.path('/view1');
      });
    };
    scope.login = function() {
      user.login(scope.username, scope.password, callback);
    };
  }]);
