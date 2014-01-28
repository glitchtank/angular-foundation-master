angular.module("template/tour/tour.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/tour/tour.html",
    "<div class=\"joyride-tip-guide\" ng-class=\"{ in: isOpen(), fade: animation() }\">\n" +
    "  <span class=\"joyride-nub\" ng-class=\"{\n" +
    "    bottom: placement === 'top',\n" +
    "    left: placement === 'right',\n" +
    "    right: placement === 'left',\n" +
    "    top: placement === 'bottom'\n" +
    "  }\"></span>\n" +
    "  <div class=\"joyride-content-wrapper\">\n" +
    "    <h4 ng-bind=\"title\" ng-show=\"title\"></h4>\n" +
    "    <p ng-bind=\"content\"></p>\n" +
    "    <a class=\"small button joyride-next-tip\" ng-show=\"!isLastStep()\" ng-click=\"nextStep()\">Next</a>\n" +
    "    <a class=\"small button joyride-next-tip\" ng-show=\"isLastStep()\" ng-click=\"endTour()\">End</a>\n" +
    "    <a class=\"joyride-close-tip\" ng-click=\"endTour()\">&times;</a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);
