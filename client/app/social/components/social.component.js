const social = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.social = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
		<h1>This is the SOCIAL MEDIA page.</h1>
	`
};

angular.module('RowdyMermaid-site.social')
	.component('social', social);

social.$inject = [];
