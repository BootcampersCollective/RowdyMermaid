function backgroundSelector () {
	if (window.location.pathname == "/"){
		return "container-menu-transparent"
	}
    else{
		return "container-menu"
	}
}

const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `<div class="${backgroundSelector()}">
<div>Header</div>
    <rowdy-menu-bar></rowdy-menu-bar>
</div>`
};

angular.module('RowdyMermaid-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
