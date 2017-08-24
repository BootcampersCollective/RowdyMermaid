function taproomRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.taproom',
			url: 'taproom',
			component: 'taproom'
		});
}

angular.module('RowdyMermaid-site.taproom')
	.config(taproomRoute);

taproomRoute.$inject = ['$stateProvider'];
