const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `
	<div class="home-container">
		<div style="height: 80px;"></div> // in place to account for the navbar
		<header header-image="'images/headerLogoCropped.png'"></header>
		<header header-image="'images/taglineBanner.png'"></header>
	</div>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
