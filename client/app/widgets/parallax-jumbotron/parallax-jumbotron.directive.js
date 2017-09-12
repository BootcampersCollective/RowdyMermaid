const parallaxJumbotron = {
    bindings: {
        imageUrl: '<',
        headerText: '<'
    },
    controller: function() {
      let ctrl = this;

      ctrl.$onInit = function() {
      }
    },
    template: `
        <div class="parallax-container">
            <div class="image" style="background-image: url({{$ctrl.imageUrl}})"></div>
            <div class="title">{{$ctrl.headerText}}</div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('parallaxJumbotron', parallaxJumbotron);
