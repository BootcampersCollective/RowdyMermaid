const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageUrl = "/images/winterPineTrees.jpg";
        ctrl.title = "ABOUT US";
        ctrl.images = [
          {
            src: 'images/bottlesAllFlavors2.jpg'
          },
          {
            src: 'images/closeUpBottles.jpg'
          },
          {
            src: 'images/truckerHat.jpg'
          },
          {
            src: 'images/hatsCloseUp.jpg'
          },
          {
            src: 'images/closeUpBottles3.jpg'
          },
          {
            src: 'images/bottlesAllFlavors.jpg'
          }
        ]

        ctrl.$onInit = function () {};
    },
    template:   `
      <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
      <div class="container">
          <span class="text">
              Seitan tattooed occupy kinfolk raw denim brunch, vinyl photo booth pork belly. Austin vegan before they sold out edison bulb next level cronut unicorn ugh. Tousled XOXO gochujang edison bulb thundercats disrupt. Chillwave cloud bread everyday carry venmo distillery. Poutine yr schlitz artisan. Try-hard truffaut craft beer raclette blog marfa keffiyeh kombucha poutine YOLO retro celiac hell of banh mi. Man braid bushwick ramps meh hoodie. Gluten-free art party gentrify hot chicken. Activated charcoal intelligentsia ennui meditation. Single-origin coffee blue bottle XOXO, helvetica fixie four loko jean shorts small batch. Taxidermy brooklyn man bun kitsch franzen vaporware.
          </span>
          <span class="image"></span>
      </div>
      <div class="gallery">
        <h1>gallery</h1>
        <div class="gallery-images">
          <div class="image-holder" ng-repeat="image in $ctrl.images">
            <img src="{{image.src}}">
          </div>
        </div>
        <button>view all</button>
      </div>
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
