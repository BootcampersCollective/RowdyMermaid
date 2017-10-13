function flavorprofileRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.flavorprofile',
			url: 'flavorprofile',
			component: 'flavorprofile'
		});
}

angular.module('RowdyMermaid-site.flavorprofile')
	.config(flavorprofileRoute);

flavorprofileRoute.$inject = ['$stateProvider'];
