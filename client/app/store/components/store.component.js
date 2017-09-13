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

		ctrl.$onInit = function () {

		};

	},
	template: `
	<section class='store-products'>
        <article ng-repeat='product in $ctrl.products' class='products'>
          <img class='product-image' src='{{product.productImgSrc}}' />
          <p class='product-name'>{{product.name}} &#36{{product.price}}</p>
          <button>Buy Now</button>
          <button>Add to Cart</button>
        </article>
      </section>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);

store.$inject = [];
