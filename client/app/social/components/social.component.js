const social = {
  bindings: {},
  controller: function($http, apiService) {
    let ctrl = this;
    ctrl.social = null;

    ctrl.$onInit = function() {
      ctrl.photos = []
      ctrl.links=[]
      apiService.getInstagram()
      .then(function(res) {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          ctrl.photos.push(res.data[i].images.standard_resolution.url)
        }
      });

    };

  },
  template: `<h1>this is where pictures will go</h1>
  <aside class="instagram">
   <div ng-repeat = "photo in $ctrl.photos" class ="instagram-container" >
            <div class="img" ng-style="{backgroundImage: 'url({{photo}})'}"></div>
            <div class="overlay"></div>
    </div>
  </aside>
  <a class="twitter-timeline" href="https://twitter.com/rowdymermaid">Tweets by rowdymermaid</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

     `

};

angular.module('RowdyMermaid-site.social').component('social', social);
social.$inject = ['$http','apiService'];
