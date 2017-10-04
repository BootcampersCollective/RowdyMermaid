const carousel = {
  bindings: {},
  controller: /*@ngInject*/ function($interval) {
    let ctrl = this;
    ctrl.setCurrentIndex = setCurrentIndex;
    ctrl.isCurrentIndex = isCurrentIndex;
    ctrl.nextSlide = nextSlide;
    ctrl.prevSlide = prevSlide;

    ctrl.currentIndex = 0;
    ctrl.onInit = function() {};

    ctrl.slides = [
      'images/autumnHaze.jpg',
      'images/blackAndWhiteTaps.jpg',
      'images/rowdySwag.jpg',
      'images/summerberry.jpg'
    ];

    function setCurrentIndex(index) {
      ctrl.currentIndex = index;
    }

    function isCurrentIndex(index) {
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

    $interval(ctrl.nextSlide, 5000);
  },
  template: `
    <div class="carousel-container">
      <img
        ng-repeat="slide in $ctrl.slides"
        ng-show="$ctrl.isCurrentIndex($index)"
        ng-src={{slide}}
      />
      <!-- <button class="arrow prev" ng-click="$ctrl.prevslide()">prev</button> -->
      <!-- <button class="arrow next" ng-click="$ctrl.nextslide()">next</button> -->

      <nav class="nav">
        <ul class="dot-wrapper">
          <li class="dot" ng-repeat="slide in $ctrl.slides"
              ng-class="{'active': $ctrl.isCurrentIndex($index)}"
              ng-click="$ctrl.setCurrentIndex($index)"
          >
          </li>
        </ul>
      </nav>
    </div>
  `
};

angular.module('RowdyMermaid-site.widgets').component('carousel', carousel);
