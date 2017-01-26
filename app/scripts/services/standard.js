'use strict';

angular.module('workspaceApp')
  .factory('standard', function ($resource) {

    // CC Standard API here
    return $resource('http://creativecommons.org/choose/xhr_api?:query', {}, {
      find: {
        method: 'GET',
        params: {
          query: "field_commercial=y&field_derivatives=sa&field_jurisdiction=&field_format=&field_worktitle=&field_attribute_to_name=&version=&field_attribute_to_url=&field_sourceurl=&field_morepermissionsurl=&lang="
        },
        isArray: false
      }
    });
  });