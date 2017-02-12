(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemListController', MenuItemListController);


    MenuItemListController.$inject = ['shortname', 'items'];
    function MenuItemListController(shortname, items) {
        var menuItems = this;
        console.log("MenuItemListController shortname is " + shortname);
        console.log("MenuItemListController items are " + items);
        console.log("MenuItemListController items are " + items[1]);
        menuItems.items = items.menu_items;
        menuItems.category = items.category;
        menuItems.shortname = shortname;
    }

}());