const social = {
  bindings: {},
  controller: function($http) {
    let ctrl = this;
    ctrl.social = null;

    ctrl.$onInit = function() {
      ctrl.photos = []
      $http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=178658361.21142ff.89b92ce099f54e98ab9e05a14087e6c1').then(function(res) {
        for (var i = 0; i < res.data.data.length; i++) {
          ctrl.photos.push(res.data.data[i].images.standard_resolution.url)
        }
        console.log(res.data.data)
        console.log(ctrl.photos)
      });
    };

  },
  template: `<h1>this is where pictures will go</h1>
  <md-content class="md-padding" layout-xs="column" layout="row">
    <div flex-xs flex-gt-xs="50" layout="column">
	<div class ="pictures" ng-repeat = "photo in $ctrl.photos">
    <md-card>
           <img ng-src="{{photo}}" class="md-card-image" alt=>

    </md-card>
           		</div>
            </div>
</md-content>
    <a class="twitter-timeline" href="https://twitter.com/rowdymermaid">Tweets by rowdymermaid</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
     `

};

angular.module('RowdyMermaid-site.social').component('social', social);
social.$inject = ['$http'];
