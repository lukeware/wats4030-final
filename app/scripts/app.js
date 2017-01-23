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
      .otherwise({
        redirectTo: '/'
      });
  });
