const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = 'Rowdy Mermaid Kombucha';
		ctrl.imageUrl = 'images/inHandRowdyBelly.jpg';
		ctrl.topImage= 'images/fallMountains.jpg';

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `
	<!--<parallax-jumbotron image-url="$ctrl.topImage"></parallax-jumbotron>-->
	<div class="image-wrapper">
		<img class="image-snowmelt" src="images/coloradoSnowmeltKombucha.png">
	</div>

	<div class="siteName">
		<img src="images/bottleLivingGingerCircleFrame.png"/>
		<h4>Boulder, Colorado</h4>
	</div>
	<div class="marketImages">
		<img src="images/citrus.jpg">
	</div>
	<div class="marketImages">
		// Holder for Image Carousel
	</div>
	<div class="viewFlavors">
		<h3>Wild Landscape Inspired Sustainaby Sourced 100% Wind Energy Produced Living Adaptogenic Kombucha</h3>
		<a href='/kombucha#top'>View All Flavors</a>
	</div>

	<!--TODO: Update break to a padding bottom.-->
	<br/>
	<parallax-jumbotron image-url="$ctrl.imageUrl"></parallax-jumbotron>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
