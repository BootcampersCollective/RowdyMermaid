const headerComponent = {
	bindings: {},
	controller: /*@ngInject*/function ($state, $rootScope) {
		let ctrl = this;
		ctrl.home = false;
		$rootScope.$on("$stateChangeSuccess", function(evt, toState, toParams, fromState, fromParams) {
			if(toState.name === 'app.home'){
			ctrl.home = true;
} else {
	ctrl.home = false;
}
	},
	template: `<div class="container-menu" ng-style="{transparent: $ctrl.home}">
      <rowdy-menu-bar></rowdy-menu-bar>
    </div>
  `,
};

angular
  .module('RowdyMermaid-site.layout')
  .component('headerComponent', headerComponent);