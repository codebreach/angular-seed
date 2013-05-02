'use strict';

/* Directives */


angular.module('app.directives', []).
directive('baseSixty', ['$q', function($q) {
  return {
    scope: {
      model: '='
    },
    link: function(scope, element, attrs) {
      element.change(function() {
	var qs = [];
	if (element[0].files.length === 0) {
	  scope.model.array.length = 0;
	} else {
	  angular.forEach(element[0].files, function(file, index) {
	    var reader = new FileReader();
	    var defered = $q.defer();
	    reader.onload = function(event) {
	      var base64Content = event.target.result.substring(
		event.target.result.indexOf(',') + 1, event.target.result.length);
              var fileName = file.name;
              var fileType = file.type;
 
	      scope.model.array.push({
		content: base64Content,
		fileName: fileName,
		fileType: fileType
	      });
	      scope.$digest();
	      defered.resolve();
	    };
	    reader.readAsDataURL(file);
	    qs.push(defered.promise);
	  });			
	  $q.all(qs);
	}
      });
    }
  };
}]);

