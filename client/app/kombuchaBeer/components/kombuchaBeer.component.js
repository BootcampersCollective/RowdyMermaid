
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

        ctrl.title = "IT'S TIME TO GET ROWDY";

        ctrl.imageUrl = '/images/twoBeersOnWood.jpg';

        ctrl.$onInit = function () {

        };
    },
    template: `
    <parallax-jumbotron class="beerParralax" image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>

    <article class="beer-info container">
      <div class="row">
        <img class="col-sm-6 img-responsive center-block img-rounded" src="https://d3ciwvs59ifrt8.cloudfront.net/9427377b-98ec-4581-86cb-348a0a0aed9a/ee1970f2-43c6-423f-8197-588c13a333e9_h.jpg?cache=new" alt="kombuchaBeer">
        <h3 class="col-sm-6">WILD SOUR 100% WIND ENERGY KOMBUCHA BEER.</h3>
      </div>
      <div class="row">
        <p>Earl Grey Kombucha is fermented for many weeks to the perfect pH and 
        introduced to wild sour Belgian beer and the two of them skip hand in hand 
        through a field of Swiss flowers. Available exclusively at our tasting room 
        in limited supply. </p>
      </div>  
    </article>
    
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
