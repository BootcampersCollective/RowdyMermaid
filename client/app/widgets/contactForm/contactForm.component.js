const contactForm = {
  bindings: {},
  controller: function() {
    let ctrl = this;

    ctrl.$onInit = function() {};
  },
  template: `
		<div class="contact-form">
			<div class="contact-form-header">Contact</div>
      <form>
        <div>
          <label for="contact-name">Name</label>
          <input id="contact-name" type="text" name="contact-name" placeholder="Name">
        </div>
        <div>
          <label for="email-address">Email</label>
          <input id="email-address" type="email" name="email-address" placeholder="Email Address">
        </div>
        <div>
          <label for="email-message" for="email-message">Message</label>
          <textarea id="email-message" type="text" name="email-message"></textarea>
        </div>
        <div>
          <button class="submit">Submit</button>
        </div>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
