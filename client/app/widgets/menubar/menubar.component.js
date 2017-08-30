const rowdyMenuBar = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.menuButtons = [
			{
				name: 'Products',
				// sref: 'app.products',
				subNav: [
					{
						name: 'Beer',
						sref: 'app'
					},
					{
						name: 'Kombucha',
						sref: 'app'
					}
				]
			},
			{
				name: 'About',
				sref: 'app.about'
			},
			{
				name: 'Taproom',
				// sref: 'app.taproom',
				subNav: [
					{
						name: 'News',
						sref: 'app'
					},
					{
						name: 'Event',
						sref: 'app'
					}
				]
			},
			{
				name: 'Store',
				sref: 'app.store'
			}
		];

		//pulled out log in and cart buttons because they need to be in a different div
		ctrl.iconButtons = [
			{
				name: 'Log In',
				sref: 'app.login',
				iconClass: 'fa-user'
			},
			{
				name: 'Shopping Cart',
				sref: 'app.shoppingCart',
				iconClass: 'fa-shopping-cart'
			}
		];
	},
	template: `<nav id="menu-bar">
    <div id="nav-logo">
        <a ui-sref="app.home"><img src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo"></a>
    </div>
    <div id="nav-links">
        <div id="user-links">
            <rowdy-menu-button data="button" ng-repeat="button in $ctrl.iconButtons">
        </div>
        <div id="page-links">
            <rowdy-menu-button data="button" ng-repeat="button in $ctrl.menuButtons">
        </div>
    </div>
</nav>`
};

angular
	.module('RowdyMermaid-site.widgets')
	.component('rowdyMenuBar', rowdyMenuBar);
