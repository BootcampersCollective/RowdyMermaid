const taproomNews = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomNews = null;

    ctrl.$onInit = function() {};

    ctrl.onTap = [
      'Strawberry',
      'Lavender',
      'Living Ginger',
      'Flower Grow',
      'Wild Kombucha Beer',
    ];

    ctrl.imageUrl = '/images/stickersColorAndBW.jpg';
    ctrl.title = 'MERMAID UPDATES';
  },
  template: `
    <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>

    <div id="news-ontap-container">
      <div id="tap-flavors">
        <h1>KOMBUCHA ON TAP</h1>
          <p ng-repeat="flavor in $ctrl.onTap">{{ flavor }}</p>
      </div>
    </div>
  `,
};

angular
  .module('RowdyMermaid-site.taproomNews')
  .component('taproomNews', taproomNews);

taproomNews.$inject = [];
