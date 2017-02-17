(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
            console.log("In the midst of life....");
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/info/my-info.html',
      controller: 'MyInfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        myInfo: ['UserService', function(UserService) {
          // return {firstname: "Brian", lastname:"The Snail", phone: "222-222-0101", email: "brian@MagicRoundabout.com", favorite: "Leaves"}; }]
      //   myInfo: ['UserService', function(UserService) {
            console.log("Weeee");
          return UserService.getInfo();
        }]
      }
    })
    .state('public.signup', {
      url: '/signup',
      templateUrl: 'src/public/info/sign-up.html',
      controller: 'SignUpController',
      controllerAs: 'signupCtrl',
      resolve: {
        UserService: ['UserService', function(UserService) {
          return UserService;
        }],
        myInfo: ['UserService', function(UserService) {
          console.log("resolving myInfo");
           return UserService.getInfo();
        }]
      }
    });
}
})();
