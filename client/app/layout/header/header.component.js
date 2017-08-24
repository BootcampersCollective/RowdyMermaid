const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<div>Header</div>
    <rowdy-menu-bar></rowdy-menu-bar>
</div>`
};

angular.module('RowdyMermaid-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
