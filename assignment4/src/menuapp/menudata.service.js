(function() {
    'use strict';

    angular.module('MenuData')
        .constant('ApiBasePath',  "https://davids-restaurant.herokuapp.com")
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$q', '$http', 'ApiBasePath'];
    function MenuDataService($q, $http, ApiBasePath) {

        let service = this;

        service.getAllCategories = function () {
            // http returns a promise
            let promise = $http({
                method: "GET",
                url: (ApiBasePath + "/categories.json")
            });

            return promise.then(function (response) {
                // extract the data from response when available
                console.log("got response from server for categories: " + response.data);
                return response.data;
            })
                .catch(function (error) {
                    console.log(error);
                })
        };

        service.getItemsForCategory = function(categoryShortName) {
            let response = $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json"),
                params: {"category": categoryShortName}
            });
            // console.log("issued menu_items request with " + categoryShortName);

            return response.then(function (response) {
                // console.log("Got response from server !");
                return response.data;
            })
        }

    }

}());
