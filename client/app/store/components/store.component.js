const store = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.store = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
		<h1>This is the STORE page.</h1>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);

store.$inject = [];
