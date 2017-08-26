const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

	},

	template:`<div class="container-footer">
<div class="copyright-text">
    ROWDY MERMAID KOMBUCHA © 2017
		<a class="link-to-top" href='#top'>Back to Top</a>
</div>
</div>`
};

angular.module('RowdyMermaid-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
