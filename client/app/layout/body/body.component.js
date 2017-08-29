const bodyComponent = {
	bindings: {

	},
	controller: function () {

	},

	template: `
	<div class="container-body">
    	<ui-view></ui-view>
	</div>`
};

angular.module('RowdyMermaid-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
