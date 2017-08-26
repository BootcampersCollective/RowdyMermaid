function rowdyMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `
<<<<<<< HEAD
		<div>
			<div id="nav-img"></div>
			<h1>Menu Bar</h1>
			<nav class="page-links">
				<rowdy-menu-button data="{{button}}" ng-repeat="button in menuButtons">
			</nav>
			<nav class="user-links">
				<rowdy-menu-button data="{{button}}" ng-repeat="button in iconButtons">
			</nav>
		</div>
=======
			<nav class="menu-bar">
          <div id="nav-img"></div>
    			<h1>Menu Bar</h1>
    			<rowdy-menu-button data="{{button}}" ng-repeat="button in menuButtons">
			</nav>
>>>>>>> development
		`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.menuButtons = [
			{
				name: 'Home',
				sref: 'app.home'
			},
			{
				name: 'About',
				sref: 'app.about'
			},
			{
				name: 'Products',
				sref: 'app.products'
			},
			{
				name: 'Taproom',
				sref: 'app.taproom'
			},
			{
				name: 'Find',
				sref: 'app.find'
			},
			{
				name: 'Social',
				sref: 'app.social'
			},
		];

		//pulled out log in and cart buttons because they need to be in a different div
		scope.iconButtons = [
			{
				name: 'Log In',
				sref: 'app.login',
				iconClasses: 'header-fa fa-user',
			},
			{
				name: 'Shopping Cart',
				sref: 'app.shoppingCart',
				iconClasses: 'header-fa fa-shopping-cart',
			},
		]

	}
}

angular
	.module('RowdyMermaid-site.widgets')
	.directive('rowdyMenuBar', rowdyMenuBar);
