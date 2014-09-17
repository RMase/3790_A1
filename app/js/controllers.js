'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
  $scope.phones = [
    {'name': 'iPhone 6',
     'snippet': 'Fast just got faster this new phone'},
    {'name': 'HTC m8 one',
     'snippet': 'I own this one wooo'},
    {'name': 'Samsung Galaxy S5',
     'snippet': 'The Next, Next Generation of Samsung.'}
  ];
});
