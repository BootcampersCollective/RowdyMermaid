const home = {
	bindings: {

	},
	controller: function () {
		let ctrl = this;
		ctrl.title = 'Rowdy Mermaid';

		ctrl.flavorImages = [
			{ src: 'images/flavorBottles/autumnHaze.jpg' },
  		{ src: 'images/flavorBottles/essence.jpg' },
  		{ src: 'images/flavorBottles/flowerGrow.jpg' },
  		{ src: 'images/flavorBottles/gingergrass.jpg' },
  		{ src: 'images/flavorBottles/livingGinger.jpg' },
  		{ src: 'images/flavorBottles/rowdyBelly.jpg' },
  		{ src: 'images/flavorBottles/savoryPeach.jpg' },
  		{ src: 'images/flavorBottles/summerberry.jpg' },
		]

		ctrl.$onInit = function () {
			console.log('init Home');
		};
		ctrl.$postLink = function () {};
	},
	template: `
	<div class="image-wrapper">
		<img src="images/coloradoSnowmeltKombucha.png">
	</div>
	<div class="siteName">
		<img src="images/bottleLivingGingerCircleFrame.png"/>
		<h3>Rowdy Mermaid Kombucha</h3>
		<h4>Boulder, Colorado</h4>
	</div>
	<div class="marketImages">
		Citrus Image
	</div>
	<div class="marketImages">
		<jk-carousel data="ctrl.flavorImages" item-template-url="'carouselImage.html'" auto-slide="true" auto-slide-time="1000">
		</jk-carousel>
	</div>
	<div class="viewFlavors">
		<h3>Wild Landscape Inspired Sustainaby Sourced 100% Wind Energy Produced Living Adaptogenic Kombucha</h3>
		<a href="/kombucha">View All Flavors</>
	</div>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
