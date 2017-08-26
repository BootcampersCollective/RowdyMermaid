const social = {
  bindings: {},
  controller: function($http) {
    let ctrl = this;
    ctrl.social = null;

    ctrl.$onInit = function() {
      ctrl.photos = []
      $http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=178658361.21142ff.89b92ce099f54e98ab9e05a14087e6c1').then(function(res) {
        for (var i = 0; i < res.data.data.length; i++) {
          ctrl.photos.push(res.data.data[i].link+"embed/")
        }
        console.log(ctrl.photos)
      });
    };

  },
  template: `<h1>this is where pictures will go</h1>
	<iframe src="https://www.instagram.com/p/BV7ZrBiABKN/embed/" height="375"></iframe>
	<div class ="pictures" ng-repeat = "photo in $ctrl.photos">
		<iframe src={{photo}} height="375"></iframe>
		</div>`

};

angular.module('RowdyMermaid-site.social').component('social', social);
social.$inject = ['$http'];
