'use strict';
/*
A controller to render a personalized header
*/
cs142App.controller('headerController',['$scope', function($scope){

 $scope.main.specialHeader = '';
 $scope.getPersonal = function(){
    $scope.main.specialHeader = 'The time is: '+ new Date()
 }

}]);
