'use strict';

angular.module('Dirs')
  .directive('spanTooltip', function(){

    var template = '<a class="tooltips" href="#">{{text}}<span>{{tooltiptext}}</span></a><div ng-transclude></div>';

    var linkFunction = function(scope,element,attrs){

    };

    var ctrl = function($scope, $element, $attrs){
        this.modifyText = function(text){
            $scope.text = text;
        };

        this.modifyStyle = function(className){
          $element.find('a').addClass(className);

      };
    };

    return {
      restrict: 'E',
      scope: {
        tooltiptext: '=tooltip',
        options: '=tooltipOptions',
        text: '=text'
      },
      controller: ctrl,
      link: linkFunction,
      transclude: true,
      template: template
    }

  });
