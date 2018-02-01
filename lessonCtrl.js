angular.module("directivePractice").controller("lessonCtrl", function($scope) {
    // $scope.test = "TESTING CONTROLLER";
    $scope.lessons = [
        "Services",
        "Routing",
        "Directives",
        "Review",
        "Firebase",
        "No server project",
        "Node",
        "Express",
        "Mongo"
    ];
    $scope.announceDay = (lesson, day) => {
        if (day) {
            alert(`${lesson} is active on ${day}.`);
        } else {
            alert(`${lesson} is not scheduled yet.`);
        }
    };
});
