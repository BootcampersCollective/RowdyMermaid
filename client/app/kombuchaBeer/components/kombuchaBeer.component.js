const kombuchaBeer = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {

        };
    },
    template: `
    <h1>This is the BEER page.</h1>
    <section>
      <h2>Flavors</h2>
      <div>SAVORY PEACH</div>
    </section>
  `
};

angular.module('RowdyMermaid-site.kombuchaBeer')
    .component('kombuchaBeer', kombuchaBeer);

kombuchaBeer.$inject = [];
