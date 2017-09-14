const shoppingCart = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.shoppingCartItems = window.localStorage;

		console.log(shoppingCartItems);

		ctrl.$onInit = function () {

		};

	},
	template: `
		<section ng-repeat='item in $ctrl.shoppingCartItems' class='store-products'>
        <article class='products'>
          <img class='product-image' src='{{product.data.productImgSrc}}' />
          <p class='product-name'>{{product.data.name}} &#36{{product.data.price}}</p>
        </article>
       	<md-button md-ink-ripple="false" class="md-raised md-primary" ng-click="$ctrl.buyNow(product.id, product.data)">Buy Now</md-button>
        <md-button md-ink-ripple="false" class="md-raised md-warn" ng-click="$ctrl.addToCart()">Add to Cart</md-button>
      </section>

	`
};

angular.module('RowdyMermaid-site.shoppingCart')
	.component('shoppingCart', shoppingCart);

shoppingCart.$inject = [];
