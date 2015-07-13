var url = "/ang/json/drinkslist.json"



var app = angular.module('myApp', ['ngSanitize']);
app.controller('drinksCtrl', function($scope, $http) {
  $http.get(url)
  .success(function (response) {$scope.cocktails = response.drinks;});
});



