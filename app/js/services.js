'use strict';

/* Services */

var publicKey = '2301fac2-e4e4-46ec-8061-7ebcb1d53698';

angular.module('app.services', []).factory('model', function($rootScope) {
	var service = {};
	
	var callbacks_ = function(callback) {
		return {
			success: function(model) {
				service.model = model;
				callback(model.toJSON());
			},
			error: function(reason) {
				log(reason);
			}
		};
	};
	/**
	 * @param {string=} id The id of the object
	 * @param {function(!Object)=} callback 
	 */
	service.get = function(id, callback) {
		var options = {};
		options[schema + '_id'] = id;
		service.model.set(options);
		service.model.fetch(callbacks_(callback));
	};
	service.create = function(callback, json) {
		service.model = new service.modelProvider(json);
		service.model.create(callbacks(callback));
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
factory('user', function(model) {
	return model('user');
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

