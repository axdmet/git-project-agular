app.factory('topicMessageServices', ['$http', function ($http) {

    var message = {};
    var baseUrl = "http://localhost:55859/api/";

/* get all topics */
    message.getAllTop = function () {
        return $http.get(baseUrl + "topics/GetAll");
    }

/* get all mesaage */
    message.getAll = function (topicId) {
        return $http.get(baseUrl + "messages/" + topicId);
    }
/* add new message */
    message.newMessage = function (text) {
        return $http.post(baseUrl + "messages/" + text);
    }


    return message;
}]);