const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageUrl = "/images/winterPineTrees.jpg";
        ctrl.headerText = "ABOUT US";
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
      <parallax-jumbotron image-url="$ctrl.imageUrl" header-text="$ctrl.headerText"></parallax-jumbotron>
      <modal-component></modal-component>
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
              <button>continue reading</button>
            </article>
          </div>
        </div>
      </div>

      <div class="container">
        <span class="image"></span>
            <span class="text">
                <h1>KOMBUCHA ON TAP?</h1>
                <p>
                Imagine riding your bicycle along the winding Boulder bike path on a beautifully sunny afternoon and happening upon a tasting room serving up nutritious, delicious kombucha on tap served by our team of intelligent and passionate locals. That was the founding concept for Rowdy Mermiad Kombucha. When we opened our doors in 2014, we were the fifth kombucha tasting room in the world. We are happy to be part of this growing national health-conscious trend. 
                </p>
          
                <p>
                We may be available in stores across the U.S. but Boulder is our heart. Come and visit us when you are in town. We love to talk SCOBY.
                </p>
 
          </span>
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
