angular.module("template/modal/window.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/window.html",
    "<div tabindex=\"-1\" class=\"reveal-modal fade {{ windowClass }}\"\n" +
    "  ng-class=\"{in: animate}\" ng-click=\"close($event)\"\n" +
    "  style=\"display: block; position: fixed; visibility: visible\">\n" +
    "  <div ng-transclude></div>\n" +
    "</div>\n" +
    "");
}]);
