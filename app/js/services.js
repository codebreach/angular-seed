'use strict';

/* Services */



//services.value('StackMobPublicKey', '2301fac2-e4e4-46ec-8061-7ebcb1d53698');
var publicKey = '2301fac2-e4e4-46ec-8061-7ebcb1d53698';
var headers = {
  'Accept': 'application/vnd.stackmob+json; version=0',
  'X-StackMob-API-Key': publicKey,
  'X-StackMob-Proxy-Plain': 'stackmob-api',
  'X-StackMob-User-Agent': 'StackMob (JS; 0.9.1)',
  'X-StackMob-Expand': 1,
  'Content-Type': 'application/json'
};
headers['X-StackMob-API-Key-'+publicKey] = 1;

angular.module('app.services', []).factory('model', function($q) {
  return function(schema) {
	var model = StackMob.Model.extend({schemaName: schema});
	var deferedHash = function(q) {
		return {'success': function(data) {
				q.resolve(data.attributes);
			},
		'error': function(data) {
				q.reject(data);
			}
		}
	}
	var get = function(id) {
		var deferred = $q.defer();
		var options = {};
		options[schema + '_id'] = id;
		var instance = new model();
		instance.fetch(deferedHash(deferred));
		return deferred.promise;
	};
	return {get: get}; 	
  };
}).factory('user', function(model) {return model('user');});;

