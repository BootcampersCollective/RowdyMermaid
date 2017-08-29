/*function backgroundSelector () {
	if (state.name === "/"){
		return "container-menu-transparent"
	}
    else{
		return "container-menu"
	}
}*/

const headerComponent = {
<<<<<<< HEAD
	bindings: {},
	controller: function () {

	},
	template: `
<div>Header</div>
    <rowdy-menu-bar></rowdy-menu-bar>
</div>`
=======
  bindings: {},
  controller: function() {},
  template: `
    <div class="container-menu">
      <rowdy-menu-bar></rowdy-menu-bar>
    </div>
  `,
>>>>>>> 6d065f7a8051c931c8e0c47de11a2714a36c8655
};

angular
  .module('RowdyMermaid-site.layout')
  .component('headerComponent', headerComponent);

headerComponent.$inject = [];
