'use strict';

/**
 * @ngdoc function
 * @name responsiveButtonsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the responsiveButtonsApp
 */
angular.module('responsiveButtonsApp')
  .controller('MainCtrl', function ($scope) {

    $scope.clickButton = function(){
      console.log('button has been clicked');
    }

  });
