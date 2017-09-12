const contactForm = {
  bindings: {},
  controller: function() {
    let ctrl = this;

    ctrl.$onInit = function() {};
  },
  template: `
		<div class="contactForm">
			<h2>Contact</h2>
			<form>
				Name<br>
				<input type="text" placeholder="Name"><br>
				Email<br>
				<input type="email" placeholder="Email Address"><br>
				Message<br>
				<textarea type="text"></textarea><br>
				<button class="submit">Submit</button>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
