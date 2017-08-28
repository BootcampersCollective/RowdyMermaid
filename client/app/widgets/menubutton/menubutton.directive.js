function rowdyMenuButton() {
  const directive = {
    link: link,
    restrict: 'EA',
    template: `
      <div class="menu-button">
        <a ui-sref="{{button.sref}}" ng-class="{'icon': button.iconClass}">
          <i ng-if="button.iconClass" ng-class="button.iconClass" class="fa"></i>
          <span>{{button.name}}</span>
        </a>
      </div>
    `,
  };
  return directive;

  function link(scope, element, attrs) {
    scope.button = scope.$eval(attrs.data);
  }
}

angular
  .module('RowdyMermaid-site.widgets')
  .directive('rowdyMenuButton', rowdyMenuButton);
