const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `
		<div class="container-main">
            <div class="container-top">
                <div class="container-header">
                    <header-component></header-component>
                </div>
                <div class="container-body">
                    <body-component></body-component>
                </div>
            </div>
			<div class="container-footer">
				<footer-component></footer-component>
			</div>
		</div>
	`
};

angular.module('RowdyMermaid-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
