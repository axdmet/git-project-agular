var app = angular.module("forumApp", ["ngRoute"]);
//debugger
app.config(function ($routeProvider, $locationProvider) {

    $routeProvider.when("/forumList", {
        controller: "forumListController",
        templateUrl: "/app/views/forumList.html"
    });

    $routeProvider.when("/topicMessage/:topicId", {
        controller: "topicMessageController",
        templateUrl: "/app/views/topicMessage.html"
    });

    $routeProvider.when("/topicMessage", {
        controller: "topicMessageController",
        templateUrl: "/app/views/topicMessage.html"
    });


    $routeProvider.otherwise({ redirectTo: "/forumList" });

});