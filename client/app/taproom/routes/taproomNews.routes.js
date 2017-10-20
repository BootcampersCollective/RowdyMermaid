function taproomNewsRoute($stateProvider) {
  $stateProvider.state({
    name: 'app.taproomNews',
    url: 'taproom-news',
    component: 'taproomNews',
  });
}

angular.module('RowdyMermaid-site.taproomNews').config(taproomNewsRoute);

taproomNewsRoute.$inject = ['$stateProvider'];
