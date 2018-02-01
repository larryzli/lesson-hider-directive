angular.module("directivePractice").directive("lessonHider", function() {
    return {
        templateUrl: "./lessonHider.html",
        retrict: "E",
        scope: {
            lesson: "=",
            dayAlert: "&",
            delete: "&"
        },
        controller: function($scope, lessonService) {
            $scope.getSchedule = lessonService.getSchedule();
            // console.log($scope.crossed);
        },
        link: (scope, element, attr) => {
            // console.log("scope: ", scope);
            // console.log("element: ", element);
            // console.log("attr: ", attr);
            scope.crossed = false;
            console.log("scope.crossed : ", scope.crossed);

            scope.getSchedule.then(response => {
                scope.schedule = response.data;

                scope.schedule.forEach(day => {
                    if (day.lesson === scope.lesson) {
                        scope.crossed = true;
                        scope.lessonDay = day.weekday;
                        // element.css("text-decoration", "line-through");
                        console.log(scope.lesson, day.lesson, scope.crossed);
                        return;
                    }
                });
            });
        }
    };
});
