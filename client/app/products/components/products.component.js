const products = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <!--These links will need to be update, but are here for dev purposes currently-->
      <a href="/kombuchaBeer"><h1>Beer</h1></a>
      <a href="/kombucha"><h1>Kombucha</h1></a>
    `
};

angular.module('RowdyMermaid-site.products')
    .component('products', products);

products.$inject = [];
