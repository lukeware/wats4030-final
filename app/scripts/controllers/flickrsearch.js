(function (angular) {
'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:FlickrsearchCtrl
 * @description
 * # FlickrsearchCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('FlickrsearchCtrl', ['$scope', '$http', function ($scope, $http) {

      $scope.master = {};
      $scope.images = {};

      $scope.search = function (searchCriteria) {

        if (searchCriteria.tags == undefined || searchCriteria.tags.trim() == "") { //maybe think of more trimming or validation? 
          searchCriteria.tags = null;
          $scope.master = angular.copy(searchCriteria);
          $scope.form.$submitted = true;
          return false;
        }
        $scope.form.tags.$setUntouched();
        $scope.form.tags.$setValidity();

        // constructs URL for getting json result
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne";

        flickrAPI = flickrAPI + "?jsoncallback=JSON_CALLBACK"
          + "&tags=" + encodeURIComponent($scope.searchCriteria.tags)
          + "&tagmode=" + $scope.searchCriteria.mode
          + "&is_common" //flickr public domain
          + "&format=json";
        
        // standard AJAX query sent JSONP
        $http.jsonp(flickrAPI)
          .success(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;

        })
        
        // error trap - maybe angular can handle more gracefully?
          .error(function (data, status, headers, config) {
          $scope.images = data;
          $scope.imagesStatus = status;
        });
        
        // reset form validation -  looks like ngModel.$validators and ngModel.$asyncValidators would do this auto
        $scope.form.tags.$setValidity();
      };
      
      // return the form to initial state
      $scope.resetForm = function (form) {
        $scope.form.tags.$setValidity();
        $scope.images = {};
        $scope.searchCriteria = {};
      };

    }]);
})(window.angular);
