(function() {
  'use strict';

  // create controllers and shopping list ShoppingListService
  angular.module('ShoppingTripApp', [])
  .controller('ToBuyListController', ToBuyListController)
  .controller('BoughtListController', BoughtListController)
  .service('ShoppingListService', ShoppingListService)


ToBuyListController.$inject = ['ShoppingListService'];
function ToBuyListController(ShoppingListService) {

  var buyList = this;

  buyList.getItems = function () {
    console.log("calling getItemsToBuy");
    return ShoppingListService.getItemsToBuy();
  };

  buyList.empty = function() {
    return ShoppingListService.getItemsToBuy().length == 0;
  };

  buyList.buyItem = function(index) {
    ShoppingListService.buyItem(index);
  };
}

BoughtListController.$inject = ['ShoppingListService'];
function BoughtListController(ShoppingListService) {

  var boughtList = this;

  boughtList.getItems = function () {
    return ShoppingListService.getBoughtItems();
  };

  boughtList.empty = function() {
    return ShoppingListService.getBoughtItems().length == 0;
  };
}


function ShoppingListService() {
  var service = this;

  //  the initial set of items
  service.itemsToBuy =
  [{name:"Bananas", quantity:"7"},
  {name: "Tea", quantity: "1 packet"},
  {name: "Biscuits", quantity: "1 packet"},
  {name: "Sugar", quantity: "1 Kg"},
  {name: "Potatoes", quantity: "10 Kg"},
  {name: "Salmon Steaks", quantity: "2"},
  {name: "Ketchup", quantity: "1 bottle"},
  {name: "Coffee", quantity: "1 Jar"},
  ];

  service.boughtItems = [];

  service.getItemsToBuy = function () {
      return service.itemsToBuy;
  };

  service.getBoughtItems = function () {
      return service.boughtItems;
  };

  service.buyItem = function(index) {
    var boughtItem = service.itemsToBuy.splice(index, 1);
    service.boughtItems.push(boughtItem[0]);
  };
}

}());
