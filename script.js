var app = angular.module('myApp', []);
app.controller('ShowHide', function($scope) {
  $scope.show = function() {
    $scope.hide1 = false;
  }
  $scope.hide = function() {
    $scope.hide1 = true;
  }
});
