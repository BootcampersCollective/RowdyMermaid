const home = {
	template: ``,
	bindings: {
	},
	controller: function ($http){
		let ctrl = this;
		ctrl.title = 'Rowdy Mermaid';

		ctrl.$onInit = function () {
			console.log('init Home');
			$http.get('https://api.instagram.com/v1/users/self/media/recent?access_token=178658361.21142ff.89b92ce099f54e98ab9e05a14087e6c1')
				.then(function(res) {
							ctrl.expenses = res.data;
							console.log(res)
					});
		};
		ctrl.$postLink = function () {};
	}
};

angular.module('RowdyMermaid-site.home')
	.component('home', home);

home.$inject = ['$http'];
