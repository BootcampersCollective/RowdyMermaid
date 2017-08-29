function rowdyMenuBar() {
  const directive = {
    link: link,
    restrict: 'EA',
    template: `
      <nav id="menu-bar">
        <div id="nav-logo">
          <a ui-sref="app.home"><img src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo"></a>
        </div>
        <div id="nav-links">
          <div id="user-links">
            <rowdy-menu-button data="{{button}}" ng-repeat="button in iconButtons">
          </div>
          <div id="page-links">
            <rowdy-menu-button data="{{button}}" ng-repeat="button in menuButtons">
          </div>
        </div>
      </nav>
    `,
  };
  return directive;

  function link(scope, element, attrs) {
    scope.menuButtons = [
      {
        name: 'Home',
        sref: 'app.home',
      },
      {
        name: 'About',
        sref: 'app.about',
      },
      {
        name: 'Products',
        sref: 'app.products',
      },
      {
        name: 'Taproom',
        sref: 'app.taproom',
      },
      {
        name: 'Find',
        sref: 'app.find',
      },
      {
        name: 'Social',
        sref: 'app.social',
      },
    ];

    //pulled out log in and cart buttons because they need to be in a different div
    scope.iconButtons = [
      {
        name: 'Log In',
        sref: 'app.login',
        iconClass: 'fa-user',
      },
      {
        name: 'Shopping Cart',
        sref: 'app.shoppingCart',
        iconClass: 'fa-shopping-cart',
      },
    ];
  }
}

angular
  .module('RowdyMermaid-site.widgets')
  .directive('rowdyMenuBar', rowdyMenuBar);
