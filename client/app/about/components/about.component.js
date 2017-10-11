const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.imageUrl = "/images/winterPineTrees.jpg";
        ctrl.headerText = "ABOUT US";
        ctrl.images = [
          {
            src: 'images/bottlesAllFlavors2.jpg'
          },
          {
            src: 'images/closeUpBottles.jpg'
          },
          {
            src: 'images/truckerHat.jpg'
          },
          {
            src: 'images/hatsCloseUp.jpg'
          },
          {
            src: 'images/closeUpBottles3.jpg'
          },
          {
            src: 'images/bottlesAllFlavors.jpg'
          }
        ]

        ctrl.$onInit = function () {};
    },
    template:   `
      <image-plate plate="'images/royalArch.png'" headline="'Our DNA'"></image-plate>
    `
};

angular.module('RowdyMermaid-site.about')
    .component('about', about);

about.$inject = [];
