angular.module("template/progressbar/bar.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/progressbar/bar.html",
    "<span class=\"meter\" ng-transclude></span>\n" +
    "");
}]);
