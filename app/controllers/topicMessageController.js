'use strict';
app.controller('topicMessageController', ['$scope', '$routeParams', 'topicMessageServices', function ($scope, $routeParams, topicMessageServices) {
    
    $scope.topicId = $routeParams.topicId;
    
    $scope.data = [];         /* topics */
    $scope.allMessage = [];   /* messages */
    $scope.message = {};      /* post messages */

/* get all topics */
    $scope.getAllTopics = function () {
        topicMessageServices.getAllTop().then(function (result) {
            $scope.data = result.data;
        });
    }
    $scope.getAllTopics();

/* get all Messages */
    $scope.getAllMessages = function () {
        topicMessageServices.getAll($scope.topicId).then(function (result) {
            $scope.allMessage = result.data;
        });
    }
    $scope.getAllMessages();


/* get all Message */
    $scope.addNewMessage = function () {
        topicMessageServices.newMessage($scope.message).then(function (result) {
            
        });
    };





}]);



