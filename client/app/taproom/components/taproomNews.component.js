const taproomNews = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomNews = null;

    ctrl.$onInit = function() {};
  },
  template: `
	`,
};

angular
  .module('RowdyMermaid-site.taproomNews')
  .component('taproomNews', taproomNews);

taproomNews.$inject = [];
