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
        ];
        ctrl.title = 'The ROWDY MERMAID Story';
        ctrl.content = `In spring of 2013, I lost my office job in a corporate downsizing that turned out to be one of the most fortunate events of my life. I had been brewing kombucha in my garage for over two years, and secretly dreaming about an exit strategy from corporate culture. This seemed to be the universe kicking me squarely in the pants towards that door.\n

        We were living in Boulder, the healthiest city in the country, but both my wife and I had been so busy with work that the things that make us most happy—gardening, hiking, experimenting with new recipes, tastes and experiences—were increasingly falling to the wayside. With the cautious blessing of my wife, I made a leap of faith into the unknown and decided to start a kombucha company. I was armed with curiosity, a love of research, a discerning palate, a deep desire to live a healthier life, and an obsessive compulsive’s attention to detail.\n

        This last trait would come in handy as I set out to become as knowledgeable about the intricacies of the chemistry of kombucha brewing as possible, while simultaneously teaching myself to navigate the daunting maze of city codes and ordinances required to renovate an empty warehouse into a fermentation taproom. My goal was not to manufacture a product for mass consumption; I wanted a venue where I could experiment with the freshest wildcrafted ingredients and seasonal flavors.\n

        In Colorado, we are surrounded by wilderness, from snowcapped peaks of the Rocky Mountains to the cool streams bisecting our town, but we are surrounded as well by an unseen wilderness of microbial biodiversity. The pursuit of craft kombucha is also the pursuit of diversity and place. I started Rowdy Mermaid to create a venue where we could explore that diversity daily.\n

        I am often asked where the name Rowdy Mermaid comes from. My daughter has been my most enthusiastic taste-tester since I started brewing back in 2011. She had a great palate even at the tender age of 3, and I quickly learned to trust her instincts. Because my recipes were toddler safe (caffeine, alcohol and sugar free), I taught myself techniques for making them aggressively flavorful. One day, we were up in the mountains at a nearby hot springs and she was cavorting merrily in the warm pool, pretending to be a mermaid. I had been dreaming about launching the business and was figuring out how to broach the idea to my wife. As my eyes fell on my daughter, the name Rowdy Mermaid floated into my mind, and it all seemed to fall into place at that moment. The name stuck.\n

        — Jamba Dunn, Ph.D.
        `
        ctrl.showModal = false;
        ctrl.$onInit = function () {};
        ctrl.modalSize = 'large';
    },
    template:   `
      <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
      <modal-component
        title="$ctrl.title"
        article="$ctrl.content"
        modalState="$ctrl.showModal"
        size="$ctrl.modalSize"
        ng-if="$ctrl.showModal"
      ></modal-component>
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
              <button ng-click="$ctrl.showModal = true">continue reading</button>
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
