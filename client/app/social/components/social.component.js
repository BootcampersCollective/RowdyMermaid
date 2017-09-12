const social = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.social = null;

        ctrl.imageUrl = "/images/closeUpSticker.jpg";
        ctrl.title = "SOCIAL FEED";

		ctrl.$onInit = function () {

		};

	},
	template: `
	<parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>
	`
};

angular.module('RowdyMermaid-site.social')
	.component('social', social);

social.$inject = [];
