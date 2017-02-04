(function() {
  'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath',  "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      heading: '@title',
      removeItem: '&',
      nothingFound: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'menu',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var menu = this;

}

NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;

  menu.items = [];
  var lastSearchedTerm = "";

  menu.title = "Menu Choices  "

  menu.nothingFound = function() {
    return lastSearchedTerm == $scope.searchTerm && menu.items.length == 0;
  };

  menu.filterBy = function () {
    if ($scope.searchTerm && $scope.searchTerm.length > 0) {
      var promise = MenuSearchService.getMatchedMenuItems();

      promise.then(function (response) {
        // filter the list by searching descriptions
        var menu_items = response.data["menu_items"];
        menu.items = menu_items.filter(function(item) {
          return item.description.includes($scope.searchTerm);
        });
        console.log("found " + menu.items.length + " items");
        lastSearchedTerm = $scope.searchTerm;
        menu.title = "Menu Choices containing " + $scope.searchTerm
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  };

  menu.removeItem = function(index) {
    menu.items.splice(index, 1);
  };

  menu.foundItems = function () {
    return menu.items;
  }
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    return response;
  }
}

}());
