"use strict";

/**
 * Create an angular module called 'cs142App' and assign it to a DOM property with the same name.
 * The [] argument specifies module is to be created and doesn't require any other module.
 */
var cs142App = angular.module('cs142App', ['ngRoute']);

cs142App.config(function($routeProvider){
  
  $routeProvider
  .when('/states',{
    templateUrl:'./components/states/statesTemplate.html',
    controller:'StatesController'
  })
  .when("/example",{
    templateUrl:'./components/example/exampleTemplate.html',
    controller:'ExampleController'
  })
})

/**
 * Create a controller named 'MainController'.  The array argument specifies the controller
 * function and what dependencies it has.  We specify the '$scope' service so we can have access
 * to the angular scope of view template.
 */
  cs142App.controller('MainController', ['$scope', function($scope) {
   // We defined an object called 'main' with a single property 'title' that is used
   // by the html view template to get the page's title in the browser tab.
   $scope.main = {};
   $scope.main.title = 'CS142 Project #4';

  //  $scope.main.specialHeader = ''
  //  $scope.getPersonal = function(){
  //     $scope.main.specialHeader = 'The time is: '+ new Date()
  //  }
    $scope.main.toggle = false;;
    $scope.main.template = 'temp1';

    $scope.func = function(){
    console.log('a func')
  };
    $scope.switchTemplate = function(){
      if ($scope.main.toggle){
           $scope.main.template = 'temp1';
           $scope.main.toggle =false
           $scope.main.div = '<p> Hello </p>'
       }else {
          $scope.main.template = 'temp2';
          $scope.main.toggle = true
          $scope.main.div = '<p> Shalom </p>'
    }
          return $scope.main.toggle

  };
  


}]);
