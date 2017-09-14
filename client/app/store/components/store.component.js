const products = [
    {
        name: 'Rowdy Mermaid Trucker Hat',
		price: 20,
        productImgSrc: 'images/livingGingerProduct.jpg'
    },
    {
        name: 'Rowdy Mermaid T-Shirt',
        price: 20,
        productImgSrc: 'images/livingGingerProduct.jpg'
    }

]


const store = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.store = null;

		ctrl.products = products;

		ctrl.buyNow = function () {
			console.log("buy now")

		};

		ctrl.shoppingCart = function() {
			console.log("add to shopping cart")
		};


		ctrl.$onInit = function () {

		};

	},
	template: `
	<section ng-repeat='product in $ctrl.products' class='store-products'>
        <article class='products'>
          <img class='product-image' src='{{product.productImgSrc}}' />
          <p class='product-name'>{{product.name}} &#36{{product.price}}</p>
        </article>
       	<md-button md-ink-ripple="false" class="md-raised md-primary" ng-click="$ctrl.buyNow()">Buy Now</md-button>
        <md-button md-ink-ripple="false" class="md-raised md-warn" ng-click="$ctrl.addToCart()">Add to Cart</md-button>
      </section>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);

store.$inject = [];
