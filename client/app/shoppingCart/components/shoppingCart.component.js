const shoppingCart = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.shoppingCart = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
		<h1>This is the Shopping Cart.</h1>

	`
};

angular.module('RowdyMermaid-site.shoppingCart')
	.component('shoppingCart', shoppingCart);

shoppingCart.$inject = [];
