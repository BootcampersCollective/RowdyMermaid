function rowdyMenuButton() {
  const directive = {
    link: link,
    restrict: 'EA',
    template: `
      <div class="menu-button">
        <a ui-sref="{{button.sref}}" ng-class="{'icon': button.iconClass}">
          <i ng-if="button.iconClass" ng-class="button.iconClass" class="fa"></i>
          <span ng-mouseover="onMenuHover()" ng-mouseleave="onMenuLeave()">{{button.name}}</span>
          <div ng-if="isShowing" ng-repeat="subNav in button.subNav">{{subNav.name}}</div>
        </a>
      </div>
    `,
  };
  return directive;

  function link(scope, element, attrs) {
    scope.isShowing = false
    scope.button = scope.$eval(attrs.data);

    scope.onMenuHover = () => {
      console.log('yes before', scope.isShowing);
      scope.isShowing = true;
      console.log('yes after', scope.isShowing);
    }

    scope.onMenuLeave = () => {
      scope.isShowing = false
      console.log('no', scope.isShowing);
    }
  }
}

angular
  .module('RowdyMermaid-site.widgets')
  .directive('rowdyMenuButton', rowdyMenuButton);
