const rowdyMenuButton = {
	bindings: {
		data: '<'
	},
	controller: function () {
		let ctrl = this;
		ctrl.isShowing = false;

		ctrl.$onInit = function () {
			console.log('ctrl.button', ctrl.button);
		}

		ctrl.onMenuHover = () => {
			console.log('yes before', ctrl.isShowing);
			ctrl.isShowing = true;
			console.log('yes after', ctrl.isShowing);
		}

		ctrl.onMenuLeave = () => {
			ctrl.isShowing = false;
			console.log('no', ctrl.isShowing);
		}
	},
	template: `
      <div class="menu-button">
        <a ui-sref="{{$ctrl.data.sref}}" ng-class="{'icon': $ctrl.data.iconClass}">
          <i ng-if="$ctrl.data.iconClass" ng-class="$ctrl.data.iconClass" class="fa"></i>
          <span ng-mouseover="$ctrl.isShowing = true" ng-mouseleave="$ctrl.isShowing = false">{{$ctrl.data.name}}</span>
          <div ng-if="$ctrl.isShowing" ng-repeat="subNav in $ctrl.data.subNav">{{subNav.name}}</div>
        </a>
      </div>
    `
};

angular
	.module('RowdyMermaid-site.widgets')
	.component('rowdyMenuButton', rowdyMenuButton);
