const social = {
	bindings: {},
	controller: function ($http) {
		let ctrl = this;
		ctrl.social = null;

		ctrl.$onInit = function () {
			$http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=178658361.21142ff.89b92ce099f54e98ab9e05a14087e6c1')
				.then(function(res) {
							ctrl.expenses = res.data;
							console.log(res)
					});
		};

	},
	template: `<h1>this is where pictures will go</h1>`
};


angular.module('RowdyMermaid-site.social')
	.component('social', social);
social.$inject = ['$http'];
