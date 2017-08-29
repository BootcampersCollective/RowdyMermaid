const store = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.store = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);

store.$inject = [];
