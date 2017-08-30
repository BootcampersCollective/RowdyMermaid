function kombuchaBeerRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.kombuchaBeer',
			url: 'beer',
			component: 'kombuchaBeer'
		});
}

angular.module('RowdyMermaid-site.kombuchaBeer')
	.config(kombuchaBeerRoute);

kombuchaBeerRoute.$inject = ['$stateProvider'];
