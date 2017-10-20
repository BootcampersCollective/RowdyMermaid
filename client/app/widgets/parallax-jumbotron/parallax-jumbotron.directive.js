const parallaxJumbotron = {
    bindings: {
        imageUrl: '<',
        headerText: '<',
    },
    controller: function($location) {
        let ctrl = this;
        ctrl.isHome = true;
        var url = $location.url();
        if (url !== '/') {
            ctrl.isHome = false;
        }
        ctrl.reviews = [
            {
                review:'"You don\'t have to drink beer or wine any more to have fun. Come and try the healthy drink Kombucha. It\'s yummy plus you can enjoy GREAT entertainment like the Samsara Sisters!!"',
                reviewer: 'Hollie Mergenthal',
            },
            {
                review: '"Rowdy Mermaid had me at Chaga! When I saw the progressive ingredients they were using, I started diving into the brand more.  Super impressed with the product, flavor profiles and most of all unique ingredients. Kombucha is a valuable asset to our health."',
                reviewer: 'CHANELLE SLADICS'
            },
            {
                review: '"Where to start. I tried this at a fest and now I\'m an addict. I love the flower grow, living ginger and strawberry hibiscus. I have yet to visit this place but next time I\'m in boulder, I\'m visiting and maybe grabbing a growler or...10. Keep up the good job."',
                reviewer: 'Preeti Curly Hair Sampath'
            }
        ];

      ctrl.$onInit = function() {
      }
    },
    template: `
        <div class="parallax-container">
            <div ng-class="{'imageReviews': $ctrl.isHome, 'image': !$ctrl.isHome}" style="background-image: url({{$ctrl.imageUrl}})">
                <div class="reviewsContainer" ng-show="$ctrl.isHome">
                    <div class="reviews">
                        <div class="headerWrapper">
                            <h3>Reviews</h3>
                            <h4>Listen To The Buzz</h4>
                        </div>
                        <ul>
                            <li ng-repeat="review in $ctrl.reviews">
                                <p>{{review.review}}</p>
                                <div class="testimonialStars">★ ★ ★ ★ ★</div>
                                <h5>{{review.reviewer}}</h5>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="title">{{$ctrl.headerText}}</div>
        </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('parallaxJumbotron', parallaxJumbotron);

parallaxJumbotron.$inject = ['$location'];
