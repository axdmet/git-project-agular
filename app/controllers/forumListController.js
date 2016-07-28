'use strict';
app.controller('forumListController', ['$scope', 'forumListServices', '$location', function ($scope, forumListServices, $location) {

    $scope.data = [];
    $scope.topicObj = {};
    
    /* get all topics */
        $scope.getAllTopics = function () {
            forumListServices.getAll().then(function (result) {
                $scope.data = result.data;
            }/*, function () {
                alert("hi");
            }*/);
        }
        $scope.getAllTopics();
        
    /* add new topic */
        $scope.addNewTopic = function () {
            forumListServices.NewTopic($scope.curretDat).then(function (result) {
                $scope.getAllTopics();
            });
        };

    /* delete topic */
        $scope.doDelete = function (topicId) {
            forumListServices.deleteTopic(topicId).then(function (result) {
                $scope.getAllTopics();
            });

        };

    /* open modal update. topic in inpute (ng-modal="topicUpdateName") */
        $scope.showUpdateWindow = function (dat) {
            $scope.topicUpdateName = dat.Title;
            $scope.topicUpdaeId = dat.TopicId;
            $scope.doUpdate();
        }

    /* update topic */
        $scope.doUpdate = function () {
            forumListServices.updateTopic({ title: $scope.topicUpdateName, topicId: $scope.topicUpdaeId }).then(function (result) {
                $scope.getAllTopics();
            });
        }



    //topicServices.getAll2().then (function (result) {
    //    alert(result);
    //}, function () {
    //    alert("hi");
    //});

    /* Валидация формы */
        $scope.getError = function (error) {
            if (angular.isDefined(error)) {
                if (error.required) {
                    return "Field to fill";
                } else if (error.email) {
                    return "Please enter a valid email";

                }
            }
        }


        $scope.GoToTopicMessage = function () {
            $location.path("/topicMessage");
        }
        
}]);



