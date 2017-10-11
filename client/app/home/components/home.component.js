const home = {
  bindings: {},
  controller: function() {
    let ctrl = this;

    ctrl.$onInit = function() {
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
    <div style="height: 80px;"></div> // in place to account for the navbar
    <header header-image="'images/headerLogoCropped.png'"></header>
    <header header-image="'images/taglineBanner.png'"></header>
    <h1 style="text-align: center">Placeholder for carousel</h1>
    <header header-image="'images/closeUpBottles.jpg'"></header>
    <carousel slides="$ctrl.carouselReviews"></carousel>
    <header header-image="'images/flatirons.png'"></header>
    </div>
  `
};

angular.module('RowdyMermaid-site.home').component('home', home);

home.$inject = [];
