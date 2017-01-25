'use strict';

/**
 * @ngdoc function
 * @name workspaceApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the workspaceApp
 */
angular.module('workspaceApp')
  .controller('CreateCtrl', function ($scope, generateLicense) {
    $scope.getlicense = function () {
      var answers = "<answers>   <locale>en</locale>   <license-standard>     <commercial>n</commercial>     <derivatives>y</derivatives>     <jurisdiction></jurisdiction>   </license-standard> </answers>";
      $scope.licensexml = generateLicense.save ({type: "standard"}, {answers:answers});
    }
  
  });
