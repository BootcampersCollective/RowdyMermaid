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
        <ul>
          <li>
            <label for="contact-name">Name</label>
            <input id="contact-name" type="text" name="contact-name" placeholder="Name" required>
          </li>
          <li>
            <label for="email-address">Email</label>
            <input id="email-address" type="email" name="email-address" placeholder="Email Address" required>
          </li>
          <li>
            <label for="email-message">Message</label>
            <textarea id="email-message" type="text" name="email-message" placeholder="Message" required></textarea>
          </li>
          <li>
            <button class="submit">Submit</button>
          </li>
        </ul>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
