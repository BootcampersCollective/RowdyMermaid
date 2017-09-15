const contactForm = {
  bindings: {},
  controller: /*@ngInject*/ function($scope, apiService) {
    let ctrl = this;
    ctrl.sendEmail = sendEmail;

    ctrl.$onInit = function() {};
    ctrl.resetData = {
      name: '',
      email: '',
      message: ''
    };

    function sendEmail() {
      apiService
        .sendEmail($scope.emailData)
        .then(function(res) {
          alert('Message Sent!');
        })
        .then(function(data, status) {
          console.log('Data: ', data);
          console.log('Status: ', status);
        });
      $scope.emailData = angular.copy(ctrl.resetData);
    }
  },
  template: `
		<div class="contact-form">
			<div class="contact-form-header">Contact</div>
      <form name="contactForm" ng-submit="$ctrl.sendEmail()">
        <ul>
          <li>
            <label for="contact-name">Name</label>
            <input id="contact-name"
                   type="text"
                   name="contact-name"
                   placeholder="Name"
                   ng-model="emailData.name"
                   required
            />
          </li>
          <li>
            <label for="email-address">Email</label>
            <input id="email-address"
                   type="email"
                   name="email-address"
                   placeholder="Email Address"
                   ng-model="emailData.email"
                   required
            />
          </li>
          <li>
            <label for="email-message">Message</label>
            <textarea id="email-message"
                      type="text"
                      name="email-message"
                      placeholder="Message"
                      ng-model="emailData.message"
                      required
            ></textarea>
          </li>
          <li>
            <button type="submit">Send!</button>
          </li>
        </ul>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
