
//alt tags aren't currently used for gallery
//could be used as titles for anchors if anchors are added
//to load the carousel modal and in the carousel images
const galleryImages = [
  {
    src: 'images/tapsInForeground.jpg',
    alt: ''
  },
  {
    src: 'images/blackAndWhiteTaps.jpg',
    alt: ''
  },
  {
    src: 'images/threeBarrels.jpg',
    alt: ''
  },
  {
    src: 'images/woodenTapsPerspective.jpg',
    alt: ''
  },
  {
    src: 'images/pintInTapRoomRePost.jpg',
    alt: ''
  },
  {
    src: 'images/twoBeersOnWood.jpg',
    alt: ''
  }
]

const kombuchaBeer = {
    bindings: {},
    controller: function () {
        let ctrl = this;
        ctrl.galleryImages = galleryImages;

        ctrl.$onInit = function () {

        };
    },
    template: `
    <aside class="beer-gallery">
      <div ng-repeat="image in $ctrl.galleryImages" class="img-container">
        <div class="img" ng-style="{backgroundImage: 'url({{image.src}})'}"></div>
        <div class="overlay"></div>
      </div>
    </aside>
  `
};

angular.module('RowdyMermaid-site.kombuchaBeer')
    .component('kombuchaBeer', kombuchaBeer);

kombuchaBeer.$inject = [];
