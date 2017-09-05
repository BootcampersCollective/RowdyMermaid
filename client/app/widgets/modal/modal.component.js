const modalComponent = {
  bindings: {
    title: '<',
    article: '<',
    modalState: '&',
    modalSize: '<',
    size: '<'
  },
  controller: function(){
    const ctrl = this;
    ctrl.$onInit = function() {
      console.log('controlling stuff')
    }
    console.log('STATE OF MODAL ', ctrl.modalState)
  },
  template: `
    <div class="modal">
      <div class="modal-container large" ng-class="{size: $ctrl.modalSize}">
        <i class="fa fa-times" aria-hidden="true" ng-click="$ctrl.modalState = false"></i>
        <h1>{{$ctrl.title}}</h1>
        <article>
          {{$ctrl.article}}
        </article>
      </div>
    </div>
  `
}

angular
  .module('RowdyMermaid-site.widgets')
  .component('modalComponent', modalComponent)
