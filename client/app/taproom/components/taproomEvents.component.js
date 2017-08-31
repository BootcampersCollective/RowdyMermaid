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

    <calendar></calendar>
  `
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
