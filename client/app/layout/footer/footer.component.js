const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

	},

	template:`<div class="copyright-text">
    ROWDY MERMAID KOMBUCHA © 2017
</div>`
};

angular.module('RowdyMermaid-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
