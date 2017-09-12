function kombuchaRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.kombucha',
			url: 'kombucha',
			component: 'kombucha'
		});
}

angular.module('RowdyMermaid-site.kombucha')
	.config(kombuchaRoute);

kombuchaRoute.$inject = ['$stateProvider'];
