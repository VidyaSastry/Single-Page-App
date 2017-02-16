var myApp = angular.module('myApp',['ngMessages','ngResource','ngRoute']);

myApp.config(function ($routeProvider,$locationProvider) {
 
  $locationProvider.hashPrefix('');
  $routeProvider
  
  .when('/',{
    templateUrl : 'pages/main.html',
    controller : 'mainController'
  })
  
  .when('/second',{
    templateUrl : 'pages/second.html',
    controller : 'secondController'
  })
  
  .when('/second/:num',{
    templateUrl : 'pages/second.html',
    controller : 'secondController'
  })
})

myApp.controller('mainController',['$scope','$log',function($scope,$log){
  
   $scope.name = 'Amazonian';
  
}]);

myApp.controller('secondController',['$scope','$log','$routeParams',function($scope,$log,$routeParams){
  
    
   $scope.num = $routeParams.num || 1; 
  
  
}]);