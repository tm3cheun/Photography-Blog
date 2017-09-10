'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.gallery',
  'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .when('/gallery/:galleryId', {
      templateUrl: 'gallery/gallery.html',
      controller: 'galleryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
