function apiService($q, $http) {
  // This variable is for service level storage, it will not survive a browser reload
  // let variable = {};
  const service = {
    getMenu: getMenu,
    getEvents: getEvents,
    sendEmail: sendEmail,
    getInstagram: getInstagram,
    setSomething: setSomething
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

  function getInstagram(){
   return $http({
     method:'GET',
     url: '/api/instagram',
    });
  }

  function sendEmail(emailData) {
    return $http({
      method: 'POST',
      url: '/api/email',
      data: emailData,
      config: 'Content-Type: application/json;'
    });
  }

  function setSomething() {}

  function internalFunction() {}
}

angular.module('RowdyMermaid-site.common').factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
