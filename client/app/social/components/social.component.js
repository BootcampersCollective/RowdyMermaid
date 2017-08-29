const social = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.social = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
	`
};

angular.module('RowdyMermaid-site.social')
	.component('social', social);

social.$inject = [];
