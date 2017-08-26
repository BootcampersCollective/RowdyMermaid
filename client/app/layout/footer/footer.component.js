const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

	},

	template:`<div class="container-footer">
<div class="copyright-text">
    ROWDY MERMAID KOMBUCHA © 2017
		<a class="link-to-top" href='#top'>Back to Top</a>
</div>
<div class="footer-links">
	<a class="footer-link-icon" href="http://www.facebook.com/rowdymermaid" target="_blank">
		<i class="fa fa-facebook-official fa-lg"></i>
	</a>
	<a class="footer-link-icon" href="http://www.instagram.com/rowdymermaidkombucha" target="_blank">
		<i class="fa fa-instagram fa-lg"></i>
	</a>
	<a class="footer-link-icon" href="http://twitter.com/rowdymermaid" target="_blank">
		<i class="fa fa-twitter-square fa-lg"></i>
	</a>
	<a class="footer-link-icon" href="http://www.pinterest.com/rowdymermaid" target="_blank">
		<i class="fa fa-pinterest-square fa-lg"></i>
	</a>
</div>
</div>`
};

angular.module('RowdyMermaid-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
