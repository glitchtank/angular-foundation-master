angular.module("template/pagination/pagination.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pagination.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-repeat=\"page in pages\" ng-class=\"{arrow: $first || $last, current: page.active, unavailable: page.disabled}\">\n" +
    "  	<a ng-click=\"selectPage(page.number)\">{{page.text}}</a>\n" +
    "  </li>\n" +
    "</ul>\n" +
    "");
}]);
