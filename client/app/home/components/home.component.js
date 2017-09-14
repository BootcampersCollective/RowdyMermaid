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
	<div class="homeBackgrounds">
		<img class="homeBackground picOne" src="/images/bottlesCloseUpWhiteBackground.jpg">
		<img class="homeBackground picTwo" src="/images/bottlesCloseup.jpg">
		<img class="homeBackground picThree" src="/images/bottlesDarkBackground.jpg">
		<img class="homeBackground picFour" src="/images/closeUpBottles3.jpg">
	</div>
	<!--<parallax-jumbotron image-url="$ctrl.topImage"></parallax-jumbotron>-->
	<div class="image-wrapper">
		<img class="image-snowmelt" src="images/coloradoSnowmeltKombucha.png">
	</div>
	<div class="homeContainer">
		<div class="siteName">
			<img src="images/bottleLivingGingerCircleFrame.png"/>
			<h3>Rowdy Mermaid Kombucha</h3>
			<h4>Boulder, Colorado</h4>
		</div>
		<div class="lineDivider"></div>
		<div class="marketImages">
			<img class="home-citrus-bottles" id="citrus" src="images/citrus.jpg">
			<img class="home-citrus-bottles" id="bottles"src="images/autumnHaze.jpg">
		</div>
		<div class="viewFlavors">
			<h3>Wild Landscape Inspired Sustainaby Sourced 100% Wind Energy Produced Living Adaptogenic Kombucha</h3>
			<a href="/kombucha">View All Flavors</>
		</div>
	</div>
	<parallax-jumbotron image-url="$ctrl.imageUrl"></parallax-jumbotron>
	`

};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = [];
