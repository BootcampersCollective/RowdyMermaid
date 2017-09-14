let shoppingCartData = null;

const store = {
	bindings: {},
	controller: /*@ngInject*/ function(apiService) {
		let ctrl = this;
		ctrl.products = null;

		console.log(`PRODUCTS PRE ONIT: ${ctrl.products}`);

		ctrl.$onInit = function () {
            apiService
                .getProducts()
                .then(function(res) {
                    console.log('getProducts res', res);
                    ctrl.products = res.data;
                })
                .catch(function(err) {
                    console.log('getProducts Error', err);
                });
		};

        console.log(`PRODUCTS Post ONIT: ${products}`);

        ctrl.buyNow = function (id, data) {
        	let information = JSON.stringify(data);
        	shoppingCartData = localStorage.setItem(id, information);
            console.log(`buy now ${id} ${shoppingCartData}`)

        };

        ctrl.addToCart = function() {
            console.log("add to shopping cart")
        };

	},
	template: `
	<section ng-repeat='product in $ctrl.products' class='store-products'>
        <article class='products'>
          <img class='product-image' src='{{product.data.productImgSrc}}' />
          <p class='product-name'>{{product.data.name}} &#36{{product.data.price}}</p>
        </article>
       	<md-button md-ink-ripple="false" class="md-raised md-primary" ng-click="$ctrl.buyNow(product.id, product.data)">Buy Now</md-button>
        <md-button md-ink-ripple="false" class="md-raised md-warn" ng-click="$ctrl.addToCart()">Add to Cart</md-button>
      </section>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);