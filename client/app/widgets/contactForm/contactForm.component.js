const contactForm = {
  bindings: {},
  controller: /*@ngInject*/ function($scope, apiService) {
    let ctrl = this;
    ctrl.sendEmail = sendEmail;
    ctrl.success = false;

    ctrl.$onInit = function() {
      ctrl.resetData = {
        name: '',
        email: '',
        message: ''
      };
    };

    function sendEmail() {
      apiService
        .sendEmail($scope.emailData)
        .then(function(res) {
          ctrl.name = res.data.name;
          ctrl.success = true;
        })
        .catch(function(err) {
          console.log('ERR', err);
        });
      $scope.emailData = angular.copy(ctrl.resetData);
    }
  },
  template: `
		<div class="contact-form">
			<div class="contact-form-header">Contact</div>
      <form name="contactForm" ng-submit="$ctrl.sendEmail()" novalidate>
        <div>
          <label for="cf-name">Name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            ng-model="emailData.name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label for="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            data-ng-model="emailData.email"
            placeholder="Email Address"
            required
          />
        </div>
        <div>
          <label for="cf-message">Message</label>
          <textarea
            id="cf-message"
            type="text"
            name="message"
            data-ng-model="emailData.message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Send!</button>
          <span class="msg-sent" ng-if="$ctrl.success">Message sent!</span>
        </div>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
