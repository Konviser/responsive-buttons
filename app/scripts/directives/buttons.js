'use strict';

angular.module('Dirs',[]);

angular.module('Dirs')
  .directive('buttonDir', function($window, $compile){

    var buttonLgTemplate = '<button type="button" ng-click="clickFunc()" class="btn btn-success btn-lg"> <span class="glyphicon glyphicon-wrench"></span> Click </button>';
    var buttonMdTemplate = '<button type="button" ng-click="clickFunc()" class="btn btn-primary"> <span class="glyphicon glyphicon-wrench"></span> Click </button>';
    var buttonSmTemplate = '<button type="button" ng-click="clickFunc()" class="btn btn-info btn-sm"> <span class="glyphicon glyphicon-wrench"></span></button>';
    var buttonXsTemplate = '<button type="button" ng-click="clickFunc()" class="btn btn-warning btn-xs"> <span class="glyphicon glyphicon-wrench"></span></button>';

    var getTemplate = function(type){

      var template;

      switch(type){

        case 'button-lg':
              template = buttonLgTemplate;
              break;

        case 'button-md':
              template = buttonMdTemplate;
              break;

        case 'button-sm':
          template = buttonSmTemplate;
          break;

        case 'button-xs':
          template = buttonXsTemplate;
          break;
      }

      return template;
    };


    var linkFunction = function(scope, element, attrs, tooltipCtrl){
      console.log(tooltipCtrl);

      tooltipCtrl.modifyText('tooltiptext and style has been modified by buttons directive');
      tooltipCtrl.modifyStyle('buttondirstyle');

      scope.clickFunc = scope[attrs.click];

      scope.$watch(function(){
        return $($window).width();

      }, function(value) {

        if (value > 1024) {
          element.html(getTemplate('button-lg')).show();
        }
        else if (value <= 1024 && value > 800) {
          element.html(getTemplate('button-md')).show();
        }
        else if (value <= 800 && value > 400) {
          element.html(getTemplate('button-sm')).show();
        }
        else if ( value <= 400) {
          element.html(getTemplate('button-xs')).show();
        }

        $compile(element.contents())(scope);
      },true);

      $($window).bind('resize', function () {
        scope.$apply();
      });

    };

    return {

      restrict: 'E',
      replace: true,
      require: '^spanTooltip',
      link: linkFunction
    }

  });
