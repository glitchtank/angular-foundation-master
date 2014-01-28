angular.module("template/tabs/tab.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tab.html",
    "<dd ng-class=\"{active: active}\">\n" +
    "  <a ng-click=\"select()\" tab-heading-transclude>{{heading}}</a>\n" +
    "</dd>\n" +
    "");
}]);
