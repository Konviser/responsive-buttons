'use strict';

angular.module('Dirs',[]);

angular.module('Dirs')
  .directive('buttonDir', function($window, $compile){

    var buttonLgTemplate = '<button type="button" class="btn btn-default btn-lg"> <span class="glyphicon glyphicon-star"></span> Click </button>';
    var buttonMdTemplate = '<button type="button" class="btn btn-default"> <span class="glyphicon glyphicon-star"></span> Click </button>';
    var buttonSmTemplate = '<button type="button" class="btn btn-default btn-sm"> <span class="glyphicon glyphicon-star"></span> Click </button>';
    var buttonXsTemplate = '<button type="button" class="btn btn-default btn-xs"> <span class="glyphicon glyphicon-star"></span> Click </button>';

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

    var linkFunction = function(scope, element, attrs){

      scope.$watch(function(){
        return $($window).width();

      }, function(value) {

        if (value >= 1024) {
          element.html(getTemplate('button-lg')).show();
          console.log(element.html());
        }
        else if (value < 1024 && value >= 800) {
          element.html(getTemplate('button-md')).show();
        }
        else if (value < 800 && value >= 320) {
          element.html(getTemplate('button-sm')).show();
        }
        else if ( value <= 320) {
          element.html(getTemplate('button-xs')).show();
        }

        $compile(element.contents())(scope);
        console.log(element.html());
      },true);

      $($window).bind('resize', function () {
        scope.$apply();
      });

    };

    return {

      replace: true,
      link: linkFunction
    }

  });
