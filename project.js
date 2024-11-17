var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $http) {
    const apiUrl = "http://localhost:8080/api/welcome";  // Use this for Spring Boot
    // const apiUrl = "http://127.0.0.1:8000/api/welcome";  // Use this for FastAPI

    $http.get(apiUrl).then(function(response) {
        $scope.welcomeMessage = response.data.message || response.data;
    }, function(error) {
        console.error('Error fetching welcome message:', error);
        $scope.welcomeMessage = "Error fetching welcome message.";
    });
});
