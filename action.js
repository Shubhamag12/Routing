var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        template : "<h2>Home</h2>Welcome to Home page!.</br></br>   {{message}}",
        controller : "mainController"
    })
    .when('/about',{
        template : "<h2>About</h2>Welcome to About page!.",
    })
    .when('/contact',{
        template : "<h2>Contact</h2>Welcome to contact page!.",
    })
    .otherwise({
        template : "<p>This is the main page</p>",
        controller : "mainController"
    });

});

app.controller('mainController', function($scope){
    $scope.message = 'Hello';
});