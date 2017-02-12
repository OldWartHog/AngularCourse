(function () {
    'use strict';

    console.log("shaving the cat");
// Define the routing for RestaurantModule

    angular.module('MenuApp')
        .config(RoutesConfig);


    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {


        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            .state('main', {    // Main page
                url: '/',
                templateUrl: 'src/menuapp/templates/main-view.template.html'
            })

            .state('categoryList', {
                url: '/categories',
                templateUrl: 'src/menuapp/templates/categoryList.template.html',
                controller: 'CategoryListController as categories',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        console.log("resolving categories");
                        let data = MenuDataService.getAllCategories();
                        console.log("getAllCategories returns: " + data.toString());
                        return data;
                    }]
                }
            })

            .state('itemList', {
                url: '/items/{categoryShortname}',
                templateUrl: 'src/menuapp/templates/itemsList.template.html',
                controller: 'MenuItemListController as menuItems',
                resolve: {
                    shortname: ['$stateParams', function ($stateParams) {
                        return $stateParams.categoryShortname;
                    }],
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        console.log("resolving items");
                        let data = MenuDataService.getItemsForCategory($stateParams.categoryShortname);
                        console.log("data is " + data);
                        return data;
                    }]
                }
            })
    }


}());
