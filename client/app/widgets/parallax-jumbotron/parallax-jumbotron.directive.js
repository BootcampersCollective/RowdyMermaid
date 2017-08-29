const parallaxJumbotron = {
    bindings: {
        imageUrl: '<',
        title: '<'
    },
    controller: function() {
      let ctrl = this;

      ctrl.$onInit = function() {
          console.log('init ctrl.imageUrl: ', ctrl.imageUrl);
          console.log('ctrl.title: ', ctrl.title);
      }
    },
    template: `
        <div class="parallax-container">
            <div class="image" style="background-image: url({{$ctrl.imageUrl}})"></div>
            <div class="title">{{$ctrl.title}}</div>
            <!--<div>-->
                <!--<img src="{{$ctrl.imageUrl}}" />-->
            <!--</div>-->
        <!--</div>-->
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('parallaxJumbotron', parallaxJumbotron);
