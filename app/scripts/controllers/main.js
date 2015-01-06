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

    $scope.url = 'images/logos/'

    $scope.courses = [
      {name: 'basic', title: 'Básico', content: 'Manejaremos las herramientas fundamentales y sus diferencias entre ellas.'},
      {name: 'javascript', title: 'Javascript', content: 'Aprenderás lo basíco de javascript para dar una mayor interactividad a tu sitio.'},
      {name: 'html', title: 'HTML', content: 'Aprenderás lo basíco de javascript para dar una mayor interactividad a tu sitio.'},
      {name: 'ruby', title: 'Ruby', content: 'Tu meta será aprender Ruby, su sintáxis, estructura, funciones y librerías.'},
      {name: 'css', title: 'CSS', content: 'Podrás crear sitios impresionantes, todo lo que necesitas es un poco de creatividad y tener un entendimiento sólido del css.'},
      {name: 'extra', title: 'Extra', content: 'Verás como hacer prototipos funcionales para smartphone, crear sitios dínamicos con Ruby on Rails y algo de angular.'}
    ]

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