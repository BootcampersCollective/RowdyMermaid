const kombucha = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <section class='kombucha-products'>
        <article class='kombucha-flavor'>
          <img class='ingredient-image' src='images/savoryPeaches.jpg' />
          <img class='product-image' src='images/savoryPeachBottle.jpg' />
          <p class='ingredients'>Filtered Colorado Snowmelt, Peach, Thyme Leaf.</p>
          <div class='name-description'>
            <p class='kombucha-name'>SAVORY PEACH</p>
            <p class='kombucha-description'>No. 11 Immunity</p>
          </div>
        </article>
      </section>
    `
};

angular.module('RowdyMermaid-site.kombucha')
    .component('kombucha', kombucha);

kombucha.$inject = [];
