const parallaxJumbotron = {
    bindings: {
        imageUrl: '<',
        title: '<'
    },
    controller: function() {
      let ctrl =this;

      ctrl.$onInit = function() {
          console.log('init ctrl.imageUrl: ', ctrl.imageUrl);
      }
    },
    template: `
        <div class="parallax-container">
            <div class="image" style="background-image: {{ $ctrl.imageUrl }}" />
            <div class="title"></div>
        </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('parallaxJumbotron', parallaxJumbotron);
