/**
 * Define StatesController for the states component of CS142 project #4
 * problem #2.  The model data for this view (the states) is available
 * at window.cs142models.statesModel().
 */

cs142App.controller('StatesController', ['$scope', function($scope) {

   // Replace this with the code for CS142 Project #4, Problem #2
   

   if ($scope.main) {
    $scope.main.title = 'CS142 Project #4 - Example';
 }
 $scope.main.parsedStates = ''
 $scope.main.states = window.cs142models.statesModel()


//  $scope.main.specialHeader = ''
//  $scope.getPersonal = function(){
//     $scope.main.specialHeader = 'The time is: '+ new Date()
//  }
 
 $scope.parseString = function(string){
   var temp =$scope.main.states 
   string = string.toLowerCase() // move to lower case
   console.log(string)
   var parse = temp.map(function(x){return x.toLowerCase()}).filter(x=> x.includes(string) )
   console.log(parse)
   $scope.main.parsedStates = parse;
   console.log($scope.main.parsedStates)
   return $scope.main.parsedStates 
  
 }
}]);