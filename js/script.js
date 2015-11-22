// script.js

var hillsbarberApp = angular.module('hillsbarberApp', ['ngRoute']);

hillsbarberApp.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{[');
    $interpolateProvider.endSymbol(']}');
}]);

hillsbarberApp.controller('mainController', function($scope) {

    $scope.message = 'Check out this haircut!';
});
