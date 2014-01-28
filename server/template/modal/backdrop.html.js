angular.module("template/modal/backdrop.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/modal/backdrop.html",
    "<div class=\"reveal-modal-bg fade\" ng-class=\"{in: animate}\" ng-click=\"close($event)\" style=\"display: block\"></div>\n" +
    "");
}]);
