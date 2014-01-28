angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tooltip/tooltip-popup.html",
    "<span class=\"tooltip tip-{{placement}}\"\n" +
    "  ng-class=\"{ in: isOpen(), fade: animation() }\"\n" +
    "  style=\"width: auto\">\n" +
    "  <span ng-bind=\"content\"></span>\n" +
    "  <span class=\"nub\"></span>\n" +
    "</span>\n" +
    "");
}]);
