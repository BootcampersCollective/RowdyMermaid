const store = {
	bindings: {},
	controller: function () {
		let ctrl = this;
		ctrl.store = null;

		ctrl.merchService = [
			{
				id: 			"5815049",
				title: 			"KOMBUCHA ROWDY MERMAID HAT (WHITE)",
				price: 			25,
				images: 		["images/truckerHat.jpg"],
				description: 	"No Description Available"
			},
            {
                id: 			"5928226",
                title: 			"KOMBUCHA ROWDY MERMAID HAT (TAN)",
                price: 			25,
                images: 		["images/brownHat.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"90EB349A",
                title: 			"T-SHIRT",
                price: 			17,
                images: 		["images/chessboard.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"ADD1C4B8",
                title: 			"BEANIE",
                price: 			10,
                images: 		["images/bottlesOnIce.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"5815049",
                title: 			"KOMBUCHA ROWDY MERMAID HAT (WHITE)",
                price: 			25,
                images: 		["images/truckerHat.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"5928226",
                title: 			"KOMBUCHA ROWDY MERMAID HAT (TAN)",
                price: 			25,
                images: 		["images/brownHat.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"90EB349A",
                title: 			"T-SHIRT",
                price: 			17,
                images: 		["images/chessboard.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"ADD1C4B8",
                title: 			"BEANIE",
                price: 			10,
                images: 		["images/bottlesOnIce.jpg"],
                description: 	"No Description Available"
            },
            {
                id: 			"5815049",
                title: 			"KOMBUCHA ROWDY MERMAID HAT (WHITE)",
                price: 			25,
                images: 		["images/truckerHat.jpg"],
                description: 	"No Description Available"
            },

		];

		ctrl.$onInit = function () {

		};

	},
	template: `
	<div class="menubarSpacer"></div>
	<h1>Store</h1>
	<div class="store-display">
	    <merch-item merch-array="$ctrl.merchService"></merch-item>
	</div>
	`
};

angular.module('RowdyMermaid-site.store')
	.component('store', store);

store.$inject = [];
