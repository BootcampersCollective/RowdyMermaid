const flavors = [
    //  todo: The bottles with updated labeling and the current flavor list has been requested.
    //  Once information is received, update the assets folder with new images and the flavors array.
  {
    name: 'LIVING GINGER',
    productImgSrc: 'images/livingGinger.jpg',
    flavorProfile: '/kombucha/livingginger'
  },
  {
    name: 'FLOWER GROW',
    productImgSrc: 'images/livingGinger.jpg',
    flavorProfile: '/kombucha/flowergrow'
  },
  {
    name: 'ROWDY BELLY',
    productImgSrc: 'images/rowdyBelly.jpg',
    flavorProfile: '/kombucha/rowdybelly'
  },
  {
    name: 'GINGERGRASS',
    productImgSrc: 'images/rowdyBelly.jpg',
    flavorProfile: '/kombucha/gingergrass'
  },
  {
    name: 'ESSENCE',
    productImgSrc: 'images/summerberry.jpg',
    flavorProfile: '/kombucha/essence'
  },
  {
    name: 'SUMMERBERRY',
    productImgSrc: 'images/summerberry.jpg',
    flavorProfile: '/kombucha/summerberry'
  },
  {
    name: 'SAVORY PEACH',
    productImgSrc: 'images/summerberry.jpg',
    flavorProfile: '/kombucha/savorypeach'
  }
]

const kombucha = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.flavors = flavors;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <div class='kombucha-products'>
        <div ng-repeat='flavor in $ctrl.flavors' class='kombucha-flavor'>
          <a href='{{}}'><img class='product-image' src='{{flavor.productImgSrc}}' /></a>
        </div>
      </div>
    `
};

angular.module('RowdyMermaid-site.kombucha')
    .component('kombucha', kombucha);

kombucha.$inject = [];
