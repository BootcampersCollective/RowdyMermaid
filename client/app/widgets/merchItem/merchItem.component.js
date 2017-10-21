'use strict';

const merchItem = {
    bindings: {
        merchArray: '<'
    },
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {
            console.log("merchItem loaded")
        }
    },
    template: `
        <div ng-repeat="item in $ctrl.merchArray track by $index" class="merch-item-container">
            <div class="merchitemVisual">
                 <img src="{{item.images[0]}}">
            </div>
            <div class="signage-container">
                <div class="item-title"><h1>{{item.title}}</h1></div>
                <div class="item-price">{{item.price | currency:"$"}}</div>
                
                <div class="pos-container">
                    <div ng-click="$ctrl.buyNow();" class="button buynow">Buy Now</div>
                    <div ng-click="$ctrl.addToCart();" class="button addToCart">Add to Cart</div>
            </div>
            
            </div>
        </div>
    `
};

angular
    .module('RowdyMermaid-site.widgets')
    .component('merchItem', merchItem);