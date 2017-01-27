'use strict';

/**
 * @ngdoc overview
 * @name workspaceApp
 * @description
 * # workspaceApp
 *
 * Main module of the application.
 */
angular
  .module('workspaceApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
     .when('/find-open', {
        templateUrl: 'views/find-open.html',
        controller: 'FindCtrl',
        controllerAs: 'find-open'
      })
     .when('/create-open', {
        templateUrl: 'views/create-open.html',
        controller: 'CreateCtrl',
        controllerAs: 'create-open'
      })
      .when('/imagesearch', {
        templateUrl: 'views/imagesearch.html',
        controller: 'FlickrController',
        controllerAs: 'imagesearch'
      })
      .when('/flickrsearch', {
        templateUrl: 'views/flickrsearch.html',
        controller: 'FlickrsearchCtrl',
        controllerAs: 'flickrsearch'
      })
      .when('/commonssearch', {
        templateUrl: 'views/commonssearch.html',
        controller: 'CommonssearchCtrl',
        controllerAs: 'commonssearch'
      })
      .when('/openimages', {
        templateUrl: 'views/openimages.html',
        controller: 'OpenimagesCtrl',
        controllerAs: 'openimages'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
