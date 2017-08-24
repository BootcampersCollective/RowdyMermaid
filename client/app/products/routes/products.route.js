function productsRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.products',
			url: 'products',
			component: 'products'
		});
}

angular.module('RowdyMermaid-site.products')
	.config(productsRoute);

aboutRoute.$inject = ['$stateProvider'];
