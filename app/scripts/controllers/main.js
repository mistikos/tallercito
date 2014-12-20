'use strict';

/**
 * @ngdoc function
 * @name landingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the landingApp
 */
angular.module('landingApp')
  .controller('MainCtrl', function ($scope, $modal) {

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.toggleModal = function(){
      var modalInstance = $modal.open({
        templateUrl: 'views/new_suscription.html',
        controller: 'AddSuscriptionCtrl'
      });
    }
  })

  .controller('AddSuscriptionCtrl', function ($scope, $modalInstance) {
    $scope.ok = function () {
      $modalInstance.close('ok');
    };


    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });