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
       if (itemCount == 0) {
         $scope.outputError("you seem to have only typed commas, please supply some data");
         return;
       }
       var comment = computeComment(itemCount);
       $scope.outputComment(comment);
     } else {
       $scope.outputError("Please enter some data");
     }
  }

  $scope.outputComment = function(comment) {
    $scope.lunchColor = 'green';
    $scope.lunchComment = comment;
  }

  $scope.outputError = function(errorText) {
    $scope.lunchColor = 'red';
    $scope.lunchComment = errorText;
  }

}

// in a more complex example these would be in a separate file.
function validateInput(text) {
  return text != undefined &&  text.length > 0;
}

function computeComment(itemCount) {
  if (itemCount > 3) {
    return "Too much!";
  } else {
    return "Enjoy!";
  }
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

}());
