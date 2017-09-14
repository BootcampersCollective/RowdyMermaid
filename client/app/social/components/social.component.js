const social = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.social = null;

        ctrl.imageUrl = "/images/closeUpSticker.jpg";
        ctrl.headerText = "SOCIAL FEED";

		ctrl.$onInit = function () {

		};

	},
	template: `
	<parallax-jumbotron image-url="$ctrl.imageUrl" header-text="$ctrl.headerText"></parallax-jumbotron>
	`
};

angular.module('RowdyMermaid-site.social')
	.component('social', social);

social.$inject = [];
