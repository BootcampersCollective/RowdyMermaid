const flavors = [
  {
    name: 'LIVING GINGER',
    ingredients: 'Filtered Colorado Snowmelt, Fresh Ginger, Tasmanian Pepperberry, Wildcrafted Chaga, Himalyan Salt.',
    descirption: 'No. 1 Adaptogenic',
    ingredientImgSrc: 'images/livingGingerIngredients.jpg',
    productImgSrc: 'images/livingGingerProduct.jpg'
  },
  {
    name: 'FLOWER GROW',
    ingredients: 'Filtered Colorado Snowmelt, Green Rooibos, Rose Petals, Chrysanthemums, Chamomile Buds.',
    descirption: 'No. 2 Caffeine-Free',
    ingredientImgSrc: 'images/flowerGrowIngredients.jpg',
    productImgSrc: 'images/flowerGrowProduct.jpg'
  },
  {
    name: 'ROWDY BELLY',
    ingredients: 'Filtered Colorado Snowmelt, fresh turmeric, fresh ginger, fennel, and coriander.',
    descirption: 'No. 6 Digestive',
    ingredientImgSrc: 'images/rowdyBellyIngredients.jpg',
    productImgSrc: 'images/rowdyBellyProduct.jpg'
  },
  {
    name: 'GINGERGRASS',
    // Note: The ingredients below are a duplicate of the flower grow ingredients.  They were pulled from the sample website, but are probably incorrect.
    ingredients: 'Filtered Colorado Snowmelt, Green Rooibos, Rose Petals, Chrysanthemums, Chamomile Buds.',
    descirption: 'No. 9 Antioxidant',
    // Note: The image below is a duplicate of the living ginger image.  May want to change in order to distinguish the two products
    ingredientImgSrc: 'images/livingGingerIngredients.jpg',
    productImgSrc: 'images/gingergrassProduct.jpg'
  },
  {
    name: 'ESSENCE',
    ingredients: 'Filtered Colorado Snowmelt, Assam Tea, Chunmee Tea, Oglong Tea, Pu-erh Tea.',
    // Note: The discription below is a duplicate of the  gingergrass description.  It was pulled from the sample website, but are probably incorrect.
    descirption: 'No. 9 Antioxidant',
    ingredientImgSrc: 'images/essenceIngredients.jpg',
    productImgSrc: 'images/essenceProduct.jpg'
  },
  {
    name: 'SUMMERBERRY',
    ingredients: 'Filtered Colorado Snowmelt, Strawberry, Hibiscus.',
    descirption: 'No. 10 Cooling',
    ingredientImgSrc: 'images/summerberryIngredients.jpg',
    productImgSrc: 'images/summerberryProduct.jpg'
  },
  {
    name: 'SAVORY PEACH',
    ingredients: 'Filtered Colorado Snowmelt, Peach, Thyme Leaf.',
    descirption: 'No. 11 Immunity',
    ingredientImgSrc: 'images/savoryPeachIngredients.jpg',
    productImgSrc: 'images/savoryPeachProduct.jpg'
  }
]

const kombucha = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.flavors = flavors;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <section class='kombucha-products'>
        <article ng-repeat='flavor in $ctrl.flavors' class='kombucha-flavor'>
          <img class='ingredient-image' src='{{flavor.ingredientImgSrc}}' />
          <img class='product-image' src='{{flavor.productImgSrc}}' />
          <p class='ingredients'>{{flavor.ingredients}}</p>
          <div class='name-description'>
            <p class='kombucha-name'>{{flavor.name}}</p>
            <p class='kombucha-description'>{{flavor.descirption}}</p>
          </div>
        </article>
      </section>
    `
};

angular.module('RowdyMermaid-site.kombucha')
    .component('kombucha', kombucha);

kombucha.$inject = [];

{/* <section class='kombucha-products'>
  <article class='kombucha-flavor'>
    <img class='ingredient-image' src='images/savoryPeaches.jpg' />
    <img class='product-image' src='images/savoryPeachBottle.jpg' />
    <p class='ingredients'>Filtered Colorado Snowmelt, Peach, Thyme Leaf.</p>
    <div class='name-description'>
      <p class='kombucha-name'>SAVORY PEACH</p>
      <p class='kombucha-description'>No. 11 Immunity</p>
    </div>
  </article>
</section> */}
