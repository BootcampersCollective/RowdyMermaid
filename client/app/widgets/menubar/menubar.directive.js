function rowdyMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `
			<div>
                <div id="nav-img"></div>
    			<h1>Menu Bar</h1>
    			<rowdy-menu-button data="{{button}}" ng-repeat="button in menuButtons">
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
			{
				name: 'Log In',
				sref: 'app.login'
			},
			{
				name: 'Shopping Cart',
				sref: 'app.shoppingCart'
			}
		];

	}
}

angular
	.module('RowdyMermaid-site.widgets')
	.directive('rowdyMenuBar', rowdyMenuBar);
