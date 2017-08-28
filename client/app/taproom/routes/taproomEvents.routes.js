function taproomEventsRoute($stateProvider) {
  $stateProvider.state({
    name: 'app.taproomEvents',
    url: 'taproom-events',
    component: 'taproomEvents',
  });
}

angular.module('RowdyMermaid-site.taproomEvents').config(taproomEventsRoute);

taproomEventsRoute.$inject = ['$stateProvider'];
