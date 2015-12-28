// static/script.js

var hillsbarberApp = angular.module('hillsbarberApp', ['ngRoute']);

hillsbarberApp.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});
// configure our routes

hillsbarberApp.config(function($routeProvider) {
    $routeProvider

        // route for home
        .when('/', {
            // templateUrl : 'templates/bootstrap_cover.html',
            templateUrl : '../static/partials/about.html',
            controller  : 'mainController'
        })

        // route for rates
        .when('/rates', {
            templateUrl : '../static/partials/rates.html',
            controller  : 'ratesController'
        })

        // routes for contact
        .when('/contact', {
            templateUrl : '../static/partials/contact.html',
            controller  : 'contactController'
        })

        // routes for calendar 
        .when('/calendar', {
            templateUrl : '../static/partials/calendar.html',
            controller  : 'calendarController'
        });
});

hillsbarberApp.controller('mainController', function($scope) {

    $scope.message = 'check out this main haircut!';
});

hillsbarberApp.controller('ratesController', function($scope) {

    $scope.message = 'check out these rates!';
});

hillsbarberApp.controller('contactController', function($scope) {

    $scope.message = 'check out these numbers!';
});

hillsbarberApp.controller('calendarController', function($scope) {

    $scope.message = 'check out these dates!';
});
