const home = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.slides = [
      'images/bottlesCloseup.jpg',
      'images/bottlesDarkBackground.jpg',
      'images/bottlesAllFlavors.jpg',
      'images/bottlesCloseUpWhiteBackground.jpg',
      'images/closeUpBottles3.jpg'
    ];
    ctrl.title = 'Rowdy Mermaid Kombucha';
    ctrl.imageUrl = 'images/inHandRowdyBelly.jpg';
    ctrl.topImage = 'images/fallMountains.jpg';
    ctrl.isHome = true;

    ctrl.$onInit = function() {
      console.log('init Home');
    };
    ctrl.$postLink = function() {};
  },
  template: `
    <carousel slides="$ctrl.slides"></carousel>
	`
};

angular.module('RowdyMermaid-site.home').component('home', home);

home.$inject = [];
