'use strict';

angular.module('myApp.home', ['ngRoute'])

.controller('HomeCtrl', ['$scope', '$location', '$http', function($scope, $location, $http) {

	$scope.galleries = [];

	$scope.init = function() {
		$http.get('../galleries.json').then(function(data) {
			$scope.galleries = data.data;
		});
	}

	$scope.goToGallery = function(id) {
		$location.path( "/gallery/" + id );
	}
	
	$scope.init();
  
}]);
