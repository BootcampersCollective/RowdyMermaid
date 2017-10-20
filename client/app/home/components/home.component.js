const home = {
  bindings: {},
  controller: /*@ngInject*/ function($http, apiService) {
    let ctrl = this;



    ctrl.$onInit = function() {
      ctrl.instagrams = []
      apiService
          .getInstagram()
          .then(function(res) {
              // console.log(res.data)
              for (var i = 0; i < res.data.length; i++) {
                  ctrl.instagrams.push({photo:res.data[i].images.standard_resolution.url,
                      link:res.data[i].link})
                  }
                    console.log(ctrl.instagrams[0].photo)
        });



      ctrl.carouselImages = [
        'images/autumnHaze.jpg',
        'images/livingGinger.jpg',
        'images/rowdyBelly.jpg',
        'images/summerberry.jpg',
        'images/autumnHaze.jpg',
        'images/livingGinger.jpg',
        'images/rowdyBelly.jpg',
        'images/summerberry.jpg'
      ];

      ctrl.carouselReviews = [
        {
          quote:
            'Rowdy Mermaid had me at Chaga! When I saw the progressive ingredients they were using, I started diving into the brand more. Super impressed with the product, flavor profiles and most of all unique ingredients. Kombucha is a valuable asset to our health.',
          rating: 5,
          author: 'CHANELLE SLADICS'
        },
        {
          quote:
            "Where to start. I tried this at a fest and now I'm an addict. I love the flower grow, living ginger and strawberry hibiscus. I have yet to visit this place but next time I'm in boulder, I'm visiting and maybe grabbing a growler or...10. Keep up the good job.",
          rating: 5,
          author: 'PREETI CURLY HAIR SAMPATH'
        },
        {
          quote:
            "You don't have to drink beer or wine any more to have fun. Come and try the healthy drink Kombucha. It's yummy plus you can enjoy GREAT entertainment like the Samsara Sisters!!",
          rating: 5,
          author: 'HOLLIE MERGENTHAL'
        }
      ];

      console.log('init Home');
    };
    ctrl.$postLink = function() {};
  },
  template: `
    <div class="home-container">
    <header header-image="'images/headerLogoCropped.png'"></header>
    <header class="snowmeltLogo" header-image="'images/taglineBanner.png'"></header>
    <div class="home-carousel">
      <ui-carousel
        slides="$ctrl.carouselImages"
        slides-to-show="4"
        slides-to-scroll="1"
        initial-slide="0"
      >
        <carousel-item>
        <img ng-src={{item}}>
        </carousel-item>
      </ui-carousel>
      <div class="flavor-button">
        <button ui-sref="app.kombucha">See All Flavors</button>
      </div>
    </div>
    <div class="social">
        <aside class="instagram">
        <div ng-repeat = "instagram in $ctrl.instagrams" class ="instagram-container" >
          <div class="img" ng-style="{backgroundImage: 'url({{instagram.photo}})'}"></div>
          <div class="overlay">
            <div class="text">
              <a href="{{instagram.link}}" target="_blank">
              <img class ="instaLink" src="https://assets.ifttt.com/images/channels/28/icons/on_color_large.png" >
              </a>
            </div>
          </div>
        </div>
      </aside>
      <div class = "twitter">
        <a class="twitter-timeline" data-height="110%" href="https://twitter.com/rowdymermaid">Tweets by rowdymermaid</a>
      </div>
    </div>

    <carousel slides="$ctrl.carouselReviews"></carousel>
    <header header-image="'images/flatirons.png'"></header>
    `
};

angular.module('RowdyMermaid-site.home').component('home', home);
