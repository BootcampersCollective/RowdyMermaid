const parallaxJumbotron = {
    bindings: {
        imageUrl: '<',
        title: '<'
    },
    controller: function() {
      let ctrl = this;

      ctrl.$onInit = function() {
      }
    },
    template: `
        <div class="parallax-container">
            <div class="image" style="background-image: url({{$ctrl.imageUrl}})"></div>
            <div class="title">{{$ctrl.title}}</div>

    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('parallaxJumbotron', parallaxJumbotron);
