// script.js
// is angular working?

'use strict';

var hillsbarberApp = angular.module('hillsbarberApp', ['ngRoute'], (function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
});

hillsbarberApp.controller('mainController', function($scope) {

    $scope.message = 'Check out this haircut!';
});

hillsbarberApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../static/partials/home.html',
            }).
            when('#about', {
                templateUrl: '../static/partials/about.html'
            }).
            otherwise({
                redirectTo: '#'
            });
        }
]);
