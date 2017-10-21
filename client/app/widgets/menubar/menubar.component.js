const rowdyMenuBar = {
  bindings: {},
  controller: function() {
    let ctrl = this;

    ctrl.payNow = function() {
        console.log('BUY!');
      }

    ctrl.menuButtons = [
      {
        name: 'Kombucha',
        sref: 'app.kombucha'
      },
      {
        name: 'About',
        sref: 'app.about'
      },
      {
        name: 'Taproom',
        subNav: [
          {
            name: 'News',
            sref: 'app.taproomNews'
          },
          {
            name: 'Events',
            sref: 'app.taproomEvents'
          }
        ]
      },
      {
        name: 'Store',
        sref: 'app.store'
      }
    ];
  },
  template: `
		<nav id="menu-bar">
	    <div id="nav-logo">
	        <a ui-sref="app.home"><img src="images/rowdyMermaidWordyLogo.png" alt="Rowdy Mermaid Logo"></a>
	    </div>
	    <div id="nav-links">
	        <div id="user-links">
							<a><i class="fa fa-user"></i></a>
							<a ng-click="className='slide-in'">
								<i class="fa fa-shopping-cart"></i>
								<span ng-mouseover="$ctrl.isShowing = true">{{$ctrl.data.name}}</span>
							</a>
	        </div>
	        <div id="page-links">
	            <rowdy-menu-button data="button" ng-repeat="button in $ctrl.menuButtons" class="menu-button-style">
	        </div>
	    </div>
			<div class="cart" ng-class="className">
				<div class="header">
					<i class="fa fa-times" aria-hidden="true" ng-click="className=''"></i>
					<h2>Your Shopping Cart</h2>
				</div>
				<hr>


				<a ui-sref="app.store" ng-click="className=''">Continue shopping</a>
        <br/>
        <button ng-click='$ctrl.payNow()'>Buy Now</button>
			</div>
	</nav>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('rowdyMenuBar', rowdyMenuBar);
