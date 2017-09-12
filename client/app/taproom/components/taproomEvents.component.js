const taproomEvents = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomEvents = null;

    ctrl.imageUrl = '/images/chessBoard.jpg';
    ctrl.headerText = 'EVENTS';

    ctrl.$onInit = function() {};
  },
  template: `
    <parallax-jumbotron image-url="$ctrl.imageUrl" header-text="$ctrl.headerText"></parallax-jumbotron>

    <div>
    Calendar will go in this div.
    </div>
  `,
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
