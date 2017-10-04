const carousel = {
  bindings: {
    slides: '<'
  },
  controller: /*@ngInject*/ function($interval, $timeout) {
    let ctrl = this;
    ctrl.setCurrentIndex = setCurrentIndex;
    ctrl.isCurrentIndex = isCurrentIndex;
    ctrl.nextSlide = nextSlide;
    ctrl.startSlides = startSlides;
    ctrl.stopSlides = stopSlides;
    ctrl.goToSlide = goToSlide;

    ctrl.$onInit = function() {
      ctrl.currentIndex = 0;
      let scroll = null;
    };

    ctrl.$onDestroy = function() {
      $interval.stop(ctrl.scroll);
    };

    function setCurrentIndex(index) {
      ctrl.currentIndex = index;
    }

    function isCurrentIndex(index) {
      return ctrl.currentIndex === index;
    }

    function nextSlide() {
      ctrl.currentIndex =
        ctrl.currentIndex < ctrl.slides.length - 1 ? ++ctrl.currentIndex : 0;
    }

    function startSlides() {
      scroll = $interval(ctrl.nextSlide, 5000);
    }

    function stopSlides() {
      $interval.cancel(scroll);
    }

    function goToSlide(index) {
      ctrl.stopSlides();
      ctrl.setCurrentIndex(index);

      $timeout(function() {
        ctrl.startSlides();
      }, 5000);
    }

    ctrl.startSlides();
  },
  template: `
    <div class="carousel-container">
      <div class="img-container">
        <img
          class="animate-show animate-hide"
          ng-repeat="slide in $ctrl.slides"
          ng-show="$ctrl.isCurrentIndex($index)"
          ng-src={{slide}}
        />
      </div>

      <div class="nav-wrapper">
        <span class="fa-circle-o" ng-repeat="slide in $ctrl.slides"
            ng-class="{'fa-circle': $ctrl.isCurrentIndex($index)}"
            ng-click="$ctrl.goToSlide($index)"
        >
        </span>
      </div>
    </div>
  `
};

angular.module('RowdyMermaid-site.widgets').component('carousel', carousel);
