function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'home'
		});
}

angular.module('RowdyMermaid-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
