'use strict';


angular.module('workspaceApp')
  .factory('generateLicense', function ($resource) {

    // CC Standard API here
    return $resource('http://api.creativecommons.org/rest/1.5/license/:type/issue', {}, {
      save: {
        method: 'POST',
        params: {
          type: "standard"
        },
        isArray: false
      }
    });
  });