'use strict';

// Declare app level module which depends on views, and components
var finomenaApp = angular.module('finomenaApp',['ngRoute','angularRipple'])

.config(['$routeProvider', function($routeProvider) {

    $routeProvider.when('/quizDetails',
    {
        templateUrl:'quizDetails/quizDetails.html',

    });
  $routeProvider.otherwise({redirectTo: '/quizDetails'});



}])
