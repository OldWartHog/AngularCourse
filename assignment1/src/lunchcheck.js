(function() {
  'use strict';


  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {

  $scope.lunchComment = "no data yet?"
  $scope.lunchColor = 'black';

  $scope.checkLunchMenu = function () {

     if (validateInput($scope.lunchText)) {
       var itemCount = countItems($scope.lunchText);
       $scope.lunchColor = 'green';
       $scope.lunchComment = outputComment(itemCount);
     } else {
       $scope.lunchColor = 'red';
       $scope.lunchComment = "Please enter some data.";
     }
  }
}

function validateInput(text) {
  if (text == undefined ||  text.length == 0) {
    return false;
  }
  return true;
}

function countItems(text) {
  var items = text.split(',');
  var count = 0;
  for (var item in items) {
    if (items[item].trim().length > 0) {
      count += 1;
    }
  }
  return count;
}

function outputComment(itemCount) {
  if (itemCount > 3) {
    return "Too much!";
  } else {
    return "Enjoy!";
  }

}

}());
