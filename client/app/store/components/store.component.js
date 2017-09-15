let shoppingCartArray = [];

const store = {
	bindings: {},
	controller: /*@ngInject*/ function(apiService) {
		let ctrl = this;
		ctrl.products = null;

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

		ctrl.openCart = function() {
		    // open cart
        }

        ctrl.addToCart = function(id, data) {
            // initialize variables
            let stringifiedShoppingCart;
            let matchCount = 0;


            // stringify the product object (data)
            let info = JSON.stringify(data);

            // check if item is already in cart

            if (shoppingCartArray.length === 0) {

                // If item is not yet in cart -> push item into cart
                shoppingCartArray.push({id, info});
            } else {
                for (let i = 0; i < shoppingCartArray.length; i++) {

                    if (shoppingCartArray[i].id === id) {
                        matchCount = matchCount + 1;
                    } else {
                        //Do nothing
                    }
                }

                if (matchCount < 1) {
                    shoppingCartArray.push({id, info});
                } else {
                    // don't do anything
                }
            }



            // stringify the array to store in localStorage
            stringifiedShoppingCart = JSON.stringify(shoppingCartArray);

            //add the key RowdyShoppingCart to localStorage with value 'stringifiedShoppingCart
            localStorage.setItem("RowdyShoppingCart", stringifiedShoppingCart);

            console.log(JSON.parse(localStorage.RowdyShoppingCart));
        };

        ctrl.buyNow = function (id, data) {
            // add item to cart
            ctrl.addToCart(id, data);

            //TODO open cart
            ctrl.openCart()
        };
	},
	template: `
	<section ng-repeat='product in $ctrl.products' class='store-products'>
        <article class='products'>
          <img class='product-image' src='{{product.data.productImgSrc}}' />
          <p class='product-name'>{{product.data.name}} &#36{{product.data.price}}</p>
        </article>
       	<md-button md-ink-ripple="false" class="md-raised md-primary" ng-click="$ctrl.buyNow(product.id, product.data)">Buy Now</md-button>
        <md-button md-ink-ripple="false" class="md-raised md-warn" ng-click="$ctrl.addToCart(product.id, product.data)">Add to Cart</md-button>
      </section>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);