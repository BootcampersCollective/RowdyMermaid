const taproomEvents = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomEvents = null;

    ctrl.imageUrl = '/images/chessBoard.jpg';
    ctrl.title = 'EVENTS';

    ctrl.$onInit = function() {};
  },
  template: `
    <parallax-jumbotron image-url="$ctrl.imageUrl" title="$ctrl.title"></parallax-jumbotron>

    <div>
    Calendar will go in this div.
    </div>
  `,
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
