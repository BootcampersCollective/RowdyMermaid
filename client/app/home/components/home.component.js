const home = {
  bindings: {},
  controller: function() {
    let ctrl = this;

    ctrl.$onInit = function() {
      console.log('init Home');
      ctrl.slides = [
        'images/autumnHaze.jpg',
        'images/livingGinger.jpg',
        'images/rowdyBelly.jpg',
        'images/summerberry.jpg',
        'images/autumnHaze.jpg',
        'images/livingGinger.jpg',
        'images/rowdyBelly.jpg',
        'images/summerberry.jpg'
      ];
    };
    ctrl.$postLink = function() {};
  },
  template: `
    <div class="home-container">
      <header header-image="'images/headerLogoCropped.png'"></header>
      <header header-image="'images/taglineBanner.png'"></header>

      <div class="home-carousel">
        <ui-carousel
          slides="$ctrl.slides"
          slides-to-show="4"
          slides-to-scroll="4"
          initial-slide="0"
        >
          <carousel-item>
          <img ng-src={{item}}>
          </carousel-item>
        </ui-carousel>
      </div>

      <header header-image="'images/closeUpBottles.jpg'"></header>
      <h1 style="text-align: center">Placeholder for reviews</h1>
      <header header-image="'images/flatirons.png'"></header>
    </div>
  `
};

angular.module('RowdyMermaid-site.home').component('home', home);

home.$inject = [];
