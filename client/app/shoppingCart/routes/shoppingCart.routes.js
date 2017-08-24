function shoppingCartRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.shoppingCart',
			url: 'shoppingCart',
			component: 'shoppingCart'
		});
}

angular.module('RowdyMermaid-site.shoppingCart')
	.config(shoppingCartRoute);

shoppingCartRoute.$inject = ['$stateProvider'];
