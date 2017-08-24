function findRoute($stateProvider) {
    $stateProvider
        .state({
            name: 'app.find',
            url: 'find',
            component: 'find'
        });
}

angular.module('RowdyMermaid-site.find')
    .config(findRoute);

findRoute.$inject = ['$stateProvider'];
