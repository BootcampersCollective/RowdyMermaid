const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = 'Rowdy Mermaid';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `
	<div class="siteName">
		<h1>This is the home page</h1>
		<h3>ROWDY MERMAID KOMBUCHA</h3>
		<h3>BOULDER, COLORADO</h3>
	</div>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
