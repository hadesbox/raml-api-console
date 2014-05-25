(function() {
  'use strict';

  RAML.Directives.ramlConsoleInitializer = function(ramlParserWrapper) {
    var controller = function($scope) {
      $scope.consoleLoader = this;

      function getVarFromURL(varName){
        var url = window.location.href;
        url = url.substring(url.indexOf('?'));
        var urlLowerCase = url.toLowerCase();
        varName = varName.toLowerCase();
        if (urlLowerCase.indexOf(varName + "=") != -1) {
          var value = url.substring(urlLowerCase.indexOf(varName) + varName.length + 1);
          if (value.indexOf('&') != -1) {
            value = value.substring(0, value.indexOf('&'));
          }
          console.log("return some >" , value, "<");
          return value;
        }
        else {
          console.log("return null;")
          return null;
        }
      }      

      var init = function () {
          var api = getVarFromURL("api");
          if(api != null){
            $scope.consoleLoader.location = "http://localhost:10000/" + api;
            $scope.consoleLoader.load();
          }
      };

      init();
    };

    controller.prototype.load = function() {
      ramlParserWrapper.load(this.location);
      this.finished = true;
    };

    controller.prototype.parse = function() {
      ramlParserWrapper.parse(this.raml);
      this.finished = true;
    };

    var link = function($scope, $element, $attrs, controller) {
      if (document.location.search.indexOf('?raml=') !== -1) {
        controller.location = document.location.search.replace('?raml=', '');
        controller.load();
      }
    };

    return { restrict: 'E', controller: controller, link: link };
  };
})();
