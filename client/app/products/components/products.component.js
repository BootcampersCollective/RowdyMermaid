const products = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {

        };
    },
    template: `
    <h1>This is the PRODUCTS page.</h1>
    <section>
      <h2>Flavors</h2>
      <div>SAVORY PEACH</div>
    </section>
  `
};

angular.module('RowdyMermaid-site.products')
    .component('products', products);

products.$inject = [];
