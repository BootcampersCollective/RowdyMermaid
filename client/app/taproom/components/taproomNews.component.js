const taproomNews = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomNews = null;

    ctrl.$onInit = function() {};
  },
  template: `
		<h1>This is the TAPROOM NEWS page.</h1>
	`,
};

angular
  .module('RowdyMermaid-site.taproomNews')
  .component('taproomNews', taproomNews);

taproomNews.$inject = [];
