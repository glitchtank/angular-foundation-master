angular.module("template/tabs/tabset.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tabs/tabset.html",
    "<div class=\"tabbable\">\n" +
    "  <dl class=\"tabs\" ng-class=\"{'vertical': vertical}\" ng-transclude></dl>\n" +
    "  <div class=\"tabs-content\">\n" +
    "    <div class=\"content\" \n" +
    "      ng-repeat=\"tab in tabs\" \n" +
    "      ng-class=\"{active: tab.active}\">\n" +
    "      <div tab-content-transclude=\"tab\"></div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
