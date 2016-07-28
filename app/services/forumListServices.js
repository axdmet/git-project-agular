app.factory('forumListServices', ['$http', function ($http) {
    var topic = {};
    var baseUrl = "http://localhost:55859/api/";


/* get all topics */
    topic.getAll = function () {
        return $http.get(baseUrl + "topics/GetAll");
    }
     
/* add new topic */
    topic.NewTopic = function (data) {
        return $http.post(baseUrl + "topics/AddTopic", data);
    }

/* delete topic */
    topic.deleteTopic = function (topicId) {
        return $http.delete(baseUrl + "topics/DeleteTopic/" + topicId);
    }

/* update topic */
    topic.updateTopic = function (updateTopic) {
        return $http.put(baseUrl + "topics/updateTopic", updateTopic);
    }

    //topic.getAll2 = function () {
    //    'use strict';

    //    // Создаётся объект promise
    //    let promise = new Promise(function (resolve, reject)  {

    //        setTimeout( function  () {
    //            // переведёт промис в состояние fulfilled с результатом "result"
    //            reject("result");
    //        }, 1000);
            

    //    });
    //    return promise;
    //}

    return topic;
}]);