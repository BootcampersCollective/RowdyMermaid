const carousel = {
  bindings: {},
  controller: /*ngInject*/ function() {
    let ctrl = this;
    ctrl.setCurrentIndex = setCurrentIndex;
    ctrl.isCurrentIndex = isCurrentIndex;
    ctrl.nextSlide = nextSlide;
    ctrl.prevSlide = prevSlide;

    ctrl.currentIndex = 0;
    ctrl.onInit = function() {};

    ctrl.slides = [
      { image: 'images/autumnHaze.jpg', val: 0 },
      { image: 'images/blackAndWhiteTaps.jpg', val: 1 },
      { image: 'images/rowdySwag.jpg', val: 2 },
      { image: 'images/summerberry.jpg', val: 3 }
    ];

    function setCurrentIndex(index) {
      ctrl.currentIndex = index;
    }

    function isCurrentIndex(index) {
      console.log('index:', index);
      console.log('currentIndex:', ctrl.currentIndex);
      return ctrl.currentIndex === index;
    }

    function prevSlide() {
      ctrl.currentIndex =
        ctrl.currentIndex > 0 ? --ctrl.currentIndex : ctrl.slides.length - 1;
    }

    function nextSlide() {
      ctrl.currentIndex =
        ctrl.currentIndex < ctrl.slides.length - 1 ? ++ctrl.currentIndex : 0;
    }
  },
  template: `
    <div class="carousel-container">
      <img ng-repeat="slide in $ctrl.slides" ng-hide="!$ctrl.isCurrentIndex($index)" ng-src={{slide.image}}></img>
      <button class="arrow prev" ng-click="$ctrl.prevSlide()">Prev</button>
      <button class="arrow next" ng-click="$ctrl.nextSlide()">Next</button>

      <nav class="nav">
        <ul class="dot-wrapper">
          <li class="dot" ng-repeat="slide in $ctrl.slides">
            <button
              ng-class="{'active': $ctrl.isCurrentIndex($index)}"
              ng-click="$ctrl.setCurrentIndex($index)">
              {{$ctrl.slide.val}}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  `
};

angular.module('RowdyMermaid-site.widgets').component('carousel', carousel);
