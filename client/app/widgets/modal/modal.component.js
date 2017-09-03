const modalComponent = {
  bindings: {},
  controller: function(){
    const ctrl = this;
    ctrl.$onInit = function() {
      console.log('controlling stuff')
    }
  },
  template: `
    <div class="modal">
      <div class="modal-container"></div>
    </div>
  `
}

angular
  .module('RowdyMermaid-site.widgets')
  .component('modalComponent', modalComponent)
