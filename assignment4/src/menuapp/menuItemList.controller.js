(function() {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemListController', MenuItemListController);


    MenuItemListController.$inject = ['shortname', 'items'];
    function MenuItemListController(shortname, items) {
        var menuItems = this;
        menuItems.items = items.menu_items;
        menuItems.category = items.category;
        menuItems.shortname = shortname;
    }

}());