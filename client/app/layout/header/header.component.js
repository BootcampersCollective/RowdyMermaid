const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="container-menu">
<div>Header</div>
		<a ui-sref="app.home"><img class="logo" src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo"></a>
    <rowdy-menu-bar></rowdy-menu-bar>
</div>`
};

angular.module('RowdyMermaid-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
