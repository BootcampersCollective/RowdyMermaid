const taproomEvents = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomEvents = null;

    ctrl.$onInit = function() {};
  },
  template: `
		<h1>This is the TAPROOM EVENTS page.</h1>
	`,
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
