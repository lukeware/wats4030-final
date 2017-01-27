(function() {
    'use strict';
    angular.module('workspaceApp')
        .controller('OpenimagesCtrl', ['$scope', '$http', function($scope, $http) {
            $scope.results = [];

            $scope.search = function() {
                $http({
                    method: 'GET',
                    url: 'https://api.flickr.com/services/rest',
                    params: {
                        method: 'flickr.photos.getRecent',
                        api_key: '8f6c9ad706307b69902de0fc15452bfb',
                        text: $scope.searchTerm,
                        format: 'json',
                        nojsoncallback: 1
                    }
                }).success(function(data) {
                    console.log(data);
                    $scope.results = data;
                }).error(function(error) {
                    console.log(error);
                });
            }

        }]);
})();