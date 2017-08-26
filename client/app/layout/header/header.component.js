const headerComponent = {
	bindings: {},
	controller: function() {},
	template: `<div class="container-menu">
<div class="container-header">
	<div class="header-text">Header</div>
</div>
		<img class="logo" src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo">
    <rowdy-menu-bar></rowdy-menu-bar>
</div>`
};

angular
	.module('RowdyMermaid-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
