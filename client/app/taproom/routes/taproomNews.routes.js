function taproomNewsRoute($stateProvider) {
  $stateProvider.state({
    name: 'app.taproomNews',
    url: 'news',
    component: 'taproomNews',
  });
}

angular.module('RowdyMermaid-site.taproomNews').config(taproomNewsRoute);

taproomNewsRoute.$inject = ['$stateProvider'];
