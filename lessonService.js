angular.module("directivePractice").service("lessonService", function($http) {
    this.getSchedule = () => $http.get("schedule.json");
});
