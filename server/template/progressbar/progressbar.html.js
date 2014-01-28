angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/progressbar.html",
    "<div class=\"progress\" ng-class=\"type\">\n" +
    "  <span class=\"meter\" ng-transclude></span>\n" +
    "</div>\n" +
    "");
}]);
