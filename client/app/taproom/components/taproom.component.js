const taproom = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.taproom = null;

		ctrl.$onInit = function () {

		};

	},
	template: `
		<h1>This is the TAPROOM page.</h1>
	`
};

angular.module('RowdyMermaid-site.taproom')
	.component('taproom', taproom);

taproom.$inject = [];
