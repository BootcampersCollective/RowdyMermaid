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
	<h1>This is the home page</h1>
	<div class="siteName">
		<img src="images/bottleLivingGingerCircleFrame.png"/>
		<h3>Rowdy Mermaid Kombucha</h3>
		<h4>Boulder, Colorado</h4>
	</div>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
