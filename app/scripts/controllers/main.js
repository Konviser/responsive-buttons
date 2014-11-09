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

   var itemText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a ' +
    'galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also ' +
    'the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the ' +
    'release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ' +
    'Aldus PageMaker including versions of Lorem Ipsum.'

    $scope.items =
      [
        {'description': 'This is an item No1',
          'color': 'red',
          'text' : itemText},

        {'description': 'This is an item No2',
          'color': 'green',
          'text' : itemText},

        {'description': 'This is an item No3',
          'color': 'blue',
          'text' : itemText },

        {'description': 'This is an item No4',
          'color': 'yellow',
          'text' : itemText },
        {'description': 'This is an item No5',
          'color': 'blue',
          'text' : itemText },

        {'description': 'This is an item No6',
          'color': 'purple',
          'text' : itemText }
      ]

  });
