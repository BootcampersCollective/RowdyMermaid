const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/function ($state, $transitions) {
		let ctrl = this;
		ctrl.home = false;

		ctrl.$onInit = function () {
			if($state.name === 'home') {
				ctrl.home = true;
			}
			$transitions.onSuccess({to: 'app.home'}, function() {
				console.log("statechange success");
			});
		};
	},
	template: `<div class="container-menu" ng-class="{transparent: $ctrl.home}">
      <rowdy-menu-bar></rowdy-menu-bar>
    </div>
  `
};

angular
	.module('RowdyMermaid-site.layout')
	.component('headerComponent', headerComponent);
