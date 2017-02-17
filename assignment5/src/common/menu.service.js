(function () {
    "use strict";

    angular.module('common')
        .service('MenuService', MenuService);


    MenuService.$inject = ['$q', '$http', 'ApiPath'];
    function MenuService($q, $http, ApiPath) {
        var service = this;

        service.getCategories = function () {
            return $http.get(ApiPath + '/categories.json').then(function (response) {
                return response.data;
            });
        };


        service.getMenuItems = function (category) {
            var config = {};
            if (category) {
                config.params = {'category': category};
            }

            return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
                return response.data;
            });
        };

        service.getMenuItem = function (shortname) {
            var url = ApiPath + '/menu_items/' + shortname + '.json';
            return $http.get(url)
                .then(function (response) {
                    return $q.resolve(response.data);
                });
        };
    }


})();
