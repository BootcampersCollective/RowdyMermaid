const social = {
  bindings: {},
  controller: function($http) {
    let ctrl = this;
    ctrl.social = null;

    ctrl.$onInit = function() {
      ctrl.photos = []
      $http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=1264789626.971ecd9.3cc1498dc3e24f0c8274f8699a9538bb').then(function(res) {
        for (var i = 0; i < res.data.data.length; i++) {
          ctrl.photos.push(res.data.data[i].images.standard_resolution.url)
        }
        console.log(res.data.data)
        console.log(ctrl.photos)
      });

    };

  },
  template: `<h1>this is where pictures will go</h1>

	<div class ="pictures" ng-repeat = "photo in $ctrl.photos">
           <img ng-src="{{photo}}" class="md-card-image" alt=>
           		</div>

  <a class="twitter-timeline" href="https://twitter.com/rowdymermaid">Tweets by rowdymermaid</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

     `

};

angular.module('RowdyMermaid-site.social').component('social', social);
social.$inject = ['$http'];
