const taproomNews = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomNews = null;

    ctrl.onTap = [
      'Strawberry',
      'Lavender',
      'Living Ginger',
      'Flower Grow',
      'Wild Kombucha Beer',
    ];

    ctrl.$onInit = function() {};
  },
  template: `
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
