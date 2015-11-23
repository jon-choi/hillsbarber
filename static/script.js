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
            templateUrl : 'templates/bootstrap_cover.html',
            controller  : 'mainController'
        })

        // route for rates
        .when('/#/rates', {
            templateUrl : '../static/partials/rates.html',
            controller  : 'ratesController'
        })

        // routes for contact
        .when('/contact', {
            templateUrl : 'contact.html',
            controller  : 'contactController'
        });
});

hillsbarberApp.controller('mainController', function($scope) {

    $scope.message = 'check out this haircut!';
});

hillsbarberApp.controller('ratesController', function($scope) {

    $scope.message = 'check out these rates!';
});

hillsbarberApp.controller('contactController', function($scope) {

    $scope.message = 'check out these numbers!';
});

console.log('this be working');
