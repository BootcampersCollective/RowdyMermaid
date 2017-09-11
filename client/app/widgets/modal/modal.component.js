const modalComponent = {
  bindings: {
    title: '<',
    text: '<',
    isShowing: '&'
  },
  controller: function(){
    const ctrl = this;
    ctrl.isWorking = function (){
      console.log('is working');
      console.log(ctrl.isShowing)
    }
    ctrl.$onInit = function() {
      console.log('controlling stuff')
    }
  },
  template: `
    <div class="modal">
      <div class="modal-container">
        <h1>{{$ctrl.title}}</h1>
        <p>{{$ctrl.text}}</p>
        <div ng-click="$ctrl.isWorking()">close button<div>
      </div>
    </div>
  `
}

angular
  .module('RowdyMermaid-site.widgets')
  .component('modalComponent', modalComponent)
