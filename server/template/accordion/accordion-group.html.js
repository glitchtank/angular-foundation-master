angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/accordion/accordion-group.html",
    "<dd>\n" +
    "  <a ng-click=\"isOpen = !isOpen\" accordion-transclude=\"heading\">{{heading}}</a>\n" +
    "  <div class=\"content\" ng-style=\"isOpen ? {display: 'block'} : {}\" ng-transclude></div>\n" +
    "</dd>\n" +
    "");
}]);
