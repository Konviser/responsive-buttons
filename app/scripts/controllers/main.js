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

    $scope.items =
      [
        {'description': 'This is an item No1',
          'color': 'red',
          'text' : 'this is a text from item No1'},

        {'description': 'This is an item No2',
          'color': 'green',
          'text' : 'this is a text from item No2'},

        {'description': 'This is an item No3',
          'color': 'blue',
          'text' : 'this is a text from item No3'}
      ]

  });
