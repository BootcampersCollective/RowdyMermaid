function apiService($q, $http) {
// This variable is for service level storage, it will not survive a browser reload
// let variable = {};
    const service = {
        getMenu: getMenu,
        getEvents: getEvents,
        getProducts: getProducts,
        setSomething: setSomething,
    };
    return service;

    function getMenu() {
        return $http({
            method: 'GET',
            url: '/api/menu'
        });
    }

    function getEvents() {
        return $http({
            method: 'GET',
            url: '/api/events'
        });
    }

    function getProducts() {
        return $http({
            method: 'GET',
            url: '/api/products'
        });
    }

    function setSomething() {

    }

    function internalFunction() {

    }
}

angular.module('RowdyMermaid-site.common')
    .factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
