angular.module("directivePractice").directive("lessonHider", function() {
    return {
        templateUrl: "./lessonHider.html",
        retrict: "E",
        scope: {
            lesson: "=",
            dayAlert: "&"
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
        },
        link: (scope, element, attr) => {
            // console.log("scope: ", scope);
            // console.log("element: ", element);
            // console.log("attr: ", attr);
            scope.getSchedule.then(response => {
                scope.schedule = response.data;

                scope.schedule.forEach(day => {
                    if (day.lesson === scope.lesson) {
                        scope.lessonDay = day.weekday;
                        element.css("text-decoration", "line-through");
                        return;
                    }
                });
            });
        }
    };
});
