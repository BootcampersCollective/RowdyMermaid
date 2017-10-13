const flavorprofile = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.flavors = flavors;

        ctrl.$onInit = function () {
        };
    },
    template: `
      <div class='flavorPage'>
          <div class='flavorprofileTitle'>
              <h1>No 1</h1>
              <h1>LIVING GINGER</h1>
              <h2>adaptogenic</h2>
          </div>
          <div class='flavorContainer'>
              <div class='flavorImage'>
                  <img src='images/livingginger.jpg'></img>
              </div>
              <div class='flavorDescription'>
                    <h2>No 1</h2>
                    <h2>LIVING GINGER</h2>
                    <h3>adaptogenic</h3>

                    <p>Inspired by water and all its delights, RM Kombucha will turn you on your tail. Take our Living Ginger for example. Not only is it oh-so-gingery with overtones of lemon and a subtle spiciness from the rare Tasmanian Pepperberry. It is also said to have made one z couple sell their possessions, move to the Maldives and open a “Dive-in” theater. Drink with care.</p>

                    <h4>FILTERED COLORADO SNOWMELT</h4>
                    <h4>FRESH GINGER</h4>
                    <h4>TASMANIAN PEPPERBERRY</h4>
                    <h4>WILDCRAFTED CHAGA</h4>
                    <h4>HIMALAYAN SALT</h4>
                    <h4>No GMOs – Gluten Free – Dolphin Safe – Contains Living Probiotics</h4>

                    <p class='probioticsPhrase'>OUR CRAFT BREWED KOMBUCHA CONTAINS LIVING PROBIOTICS AND TRACE AMOUNTS OF ALCOHOL. WE REGULARLY TEST FOR QUALITY AND SAFETY TO ENSURE YOU ARE DRINKING THE PUREST KOMBUCHA AVAILABLE.</h4>
                    <span>
                        <img src='images/logosquare.png'></img>
                        <img src='images/Organic.png'></img>
                        <img src='images/madeInColorado@2x.png'></img>
                    </span>
              </div>
          </div>
      </div>
    `
};

angular.module('RowdyMermaid-site.flavorprofile')
    .component('flavorprofile', flavorprofile);

flavorprofile.$inject = [];
