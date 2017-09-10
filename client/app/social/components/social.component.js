const social = {
  bindings: {},
  controller: function($http, apiService) {
    let ctrl = this;
    ctrl.social = null;

    ctrl.$onInit = function() {
      ctrl.instagrams = []
      apiService.getInstagram()
      .then(function(res) {
        console.log(res.data)
        for (var i = 0; i < res.data.length; i++) {
          ctrl.instagrams.push({photo:res.data[i].images.standard_resolution.url,
          link:res.data[i].link})
        }
      });
      console.log(ctrl.instagrams)

    };

  },
  template: `
  <div class="social">
  <aside class="instagram">
   <div ng-repeat = "insta in $ctrl.instagrams" class ="instagram-container" >
            <div class="img" ng-style="{backgroundImage: 'url({{insta.photo}})'}"></div>
            <div class="overlay">
              <div class="text">
                <a href="{{insta.link}}" target="_blank">
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


     `

};

angular.module('RowdyMermaid-site.social').component('social', social);
social.$inject = ['$http','apiService'];
