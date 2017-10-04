const home = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.title = 'Rowdy Mermaid Kombucha';
    ctrl.imageUrl = 'images/inHandRowdyBelly.jpg';
    ctrl.topImage = 'images/fallMountains.jpg';
    ctrl.isHome = true;

    ctrl.$onInit = function() {
      console.log('init Home');
    };
    ctrl.$postLink = function() {};
  },
  template: `
    <carousel></carousel>
	`
};

angular.module('RowdyMermaid-site.home').component('home', home);

home.$inject = [];
