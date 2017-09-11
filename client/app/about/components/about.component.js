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
        ctrl.modalState = false;
        ctrl.modalTitle = 'This is the title',
        ctrl.modalText = 'Passing the text for my modal, this has to work'
        ctrl.changeState = function(){
          ctrl.modalState = !ctrl.modalState
          console.log(ctrl.modalState);
        }

        ctrl.$onInit = function () {};
    },
    template:   `
      <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
      <modal-component
        ng-if="$ctrl.modalState"
        isShowing="$ctrl.changeState"
        title="$ctrl.modalTitle"
        text="$ctrl.modalText"
      >
      </modal-component>
      <div class="story">
        <div class="video">
          <iframe src="https://player.vimeo.com/video/99582247?title=0&byline=0&portrait=0" width="770" height="433" style="width: 100%; height: 100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
        <div class="our-story-container">
          <div class="container story-container">
            <div class="story-image">
              <img src="images/hatsCloseUp.jpg">
            </div>
            <article>
              <h1>Our Story</h1>
              <p>
                In spring of 2013, I lost my office job in a corporate downsizing that turned out to be one of the most fortunate events of my life. I had been brewing kombucha in my garage for over two years and secretly dreaming about an exit strategy from corporate culture. This seemed to be the universe helping me towards that door. We were living in Boulder, the healthiest city in the country, but both my wife and i had been so busy with work that the things that make us most happy—gardening, hiking, experimenting with new recipes, tastes and experiences—were increasingly falling to the wayside. ...
              </p>
              <button ng-click="$ctrl.changeState()">continue reading</button>
            </article>
          </div>
        </div>
      </div>
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
