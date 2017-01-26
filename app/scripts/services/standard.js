'use strict';

angular.module('workspaceApp')
  .factory('standard', function ($resource) {

    // CC Standard API here
    return $resource('http://api.creativecommons.org/rest/dev/license/:query', {}, {
      find: {
        method: 'GET',
        params: {
          query: "standard"
        },
        isArray: false
      }
    });
  });