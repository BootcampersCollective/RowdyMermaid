const shoppingCart = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.shoppingCart = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
	`
};

angular.module('RowdyMermaid-site.shoppingCart')
	.component('shoppingCart', shoppingCart);

shoppingCart.$inject = [];
