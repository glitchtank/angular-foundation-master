angular.module("template/alert/alert.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/alert/alert.html",
    "<div class='alert-box' ng-class='(type || \"\")'>\n" +
    "  <span ng-transclude></span>\n" +
    "  <a ng-show='closeable' class='close' ng-click='close()'>&times;</a>\n" +
    "</div>\n" +
    "");
}]);
