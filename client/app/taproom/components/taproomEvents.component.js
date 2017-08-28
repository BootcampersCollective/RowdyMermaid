const taproomEvents = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomEvents = null;

    ctrl.$onInit = function() {};
  },
  template: `
	`,
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
