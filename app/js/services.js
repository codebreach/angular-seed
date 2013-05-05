'use strict';

/* Services */

var publicKey = '2301fac2-e4e4-46ec-8061-7ebcb1d53698';

angular.module('app.services', []).factory('model', function($rootScope) {
  var service = {};
  
  var callbacks_ = function(callback) {
    return {
      success: function(model) {
        service.model = model;
        model.toJSON ? callback(model.toJSON()) : callback(model);
      },
      error: function(reason) {
        log(reason);
      }
    };
  };
  service.callbacks_ = callbacks_;
  /**
   * @param {string} id The id of the object
   * @param {function(!Object)=} callback 
   */
  service.get = function(id, callback) {
    var options = {};
    options[service.schema + '_id'] = id;
    service.model.set(options);
    service.model.fetch(callbacks_(callback));
  };
  service.create = function(json, callback) {
    service.model = service.model || new service.modelProvider();
    service.model.set(json);
    service.model.create(callbacks_(callback));
  };
  service.save = function(json, callback) {
    service.model.save(json, callbacks_(callback));
  };
  return function(schema, binaryFields) {
  service.schema = schema;
  service.modelProvider = StackMob.Model.extend({schemaName: schema});
  service.model = new service.modelProvider();
  return service;
  };
}).
service('user', function(model) {
  var instance = model('user');
  instance.modelProvider = StackMob.User;
  instance.login = function(username, password, callback) {
    instance.model = new instance.modelProvider({'username': username, 
						 'password': password});
    var options = instance.callbacks_(callback);
    options.fullyPopulatedUser = true;
    instance.model.login('true', options);
  };
  $.extend(this, instance);
}).
factory('comment', function(model) {
  return model('comment');
}).
factory('estimate', function(model) {
  return model('estimate');
}).
factory('picture', function(model) {
  return model('picture', 'data');
}).
factory('request', function(model) {
  return model('request');
}).
factory('vehicle', function(model) {
  return model('vehicle');
});

