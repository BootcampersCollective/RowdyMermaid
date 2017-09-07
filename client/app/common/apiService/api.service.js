function apiService($q, $http) {
// This variable is for service level storage, it will not survive a browser reload
// let variable = {};
    const service = {
        getMenu: getMenu,
        getEvents: getEvents,
        setSomething: setSomething,
        getInstagram:getInstagram
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

    function setSomething() {

    }

    function internalFunction() {

    }

    function getInstagram(){
      return $http({
        method:'GET',
        url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=1264789626.971ecd9.3cc1498dc3e24f0c8274f8699a9538bb'
      })

    }
}

angular.module('RowdyMermaid-site.common')
    .factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
