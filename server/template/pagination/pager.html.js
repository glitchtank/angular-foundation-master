angular.module("template/pagination/pager.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/pagination/pager.html",
    "<ul class=\"pagination\">\n" +
    "  <li ng-repeat=\"page in pages\" class=\"arrow\" ng-class=\"{unavailable: page.disabled, left: page.previous, right: page.next}\"><a ng-click=\"selectPage(page.number)\">{{page.text}}</a></li>\n" +
    "</ul>\n" +
    "");
}]);
