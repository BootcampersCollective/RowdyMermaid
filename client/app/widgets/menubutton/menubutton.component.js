const rowdyMenuButton = {
	bindings: {
		data: '<'
	},
	controller: function () {
		let ctrl = this;
		ctrl.isShowing = false;

		ctrl.$onInit = function () {
			// console.log('ctrl.button', ctrl.button);
		}
	},
	template: `
      <div class="menu-button" ng-mouseleave="$ctrl.isShowing = false">
        <a
					ui-sref="{{$ctrl.data.sref}}"
					ng-class="{'icon': $ctrl.data.iconClass}"
					ng-mouseover="className='slide-in'"
				>
          <i ng-if="$ctrl.data.iconClass" ng-class="$ctrl.data.iconClass" class="fa"></i>
          <span ng-mouseover="$ctrl.isShowing = true">{{$ctrl.data.name}}</span>
        </a>
				<div
					ng-if="$ctrl.data.subNav.length > 0"
					ng-mouseleave="$ctrl.isShowing = false"
				>
				</div>
					<div
					ng-if="$ctrl.isShowing"
					class="sub-menu-nav"
					ng-repeat="subNav in $ctrl.data.subNav"
				>
						<a ui-sref="{{subNav.sref}}">{{subNav.name}}</a>
				</div>
      </div>
			<div class="cart" ng-class="className" ng-mouseleave="className=''">
				<div class="header">
					<i class="fa fa-times" aria-hidden="true"></i>
					<h2>Your shopping cart</h2>
				</div>
				<hr>


				<a ui-sref="app.store">Continue shopping</a>
			</div>
    `
};

angular
	.module('RowdyMermaid-site.widgets')
	.component('rowdyMenuButton', rowdyMenuButton);
