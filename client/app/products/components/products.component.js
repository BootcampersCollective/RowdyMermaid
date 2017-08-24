const products = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
          
        };
    },
    template: `
    <h1>This is the PRODUCTS page.</h1>
  `
};

angular.module('RowdyMermaid-site.products')
    .component('products', products);

products.$inject = [];
