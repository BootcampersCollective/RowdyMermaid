const contactForm = {
  bindings: {},
  controller: /*@ngInject*/ function($scope, $timeout, apiService) {
    let ctrl = this;
    ctrl.sendEmail = sendEmail;

    ctrl.$onInit = function() {
      ctrl.success = false;

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
          ctrl.success = true;

          $timeout(function() {
            ctrl.success = false;
          }, 4000);
          $scope.emailData = angular.copy(ctrl.resetData);
        })
        .catch(function(err) {
          console.log('ERR', err);
        });
    }
  },
  template: `
		<div class="contact-form">
			<div class="contact-form-header">Contact</div>
      <form name="contactForm" ng-submit="$ctrl.sendEmail(contactForm.$valid)" novalidate>
        <div>
          <label for="cf-name">Name</label>
          <input
            id="cf-name"
            type="text"
            name="name"
            ng-model="emailData.name"
            ng-minLength="3"
            ng-class="{'has-error': contactForm.name.$invalid && !contactForm.name.$pristine}"
            placeholder="Name"
            required
          />
          <span
            class="error-text"
            ng-show="contactForm.name.$invalid && !contactForm.name.$pristine"
          >
            Required! (3 character minimum)
          </span>
        </div>
        <div>
          <label for="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            name="email"
            data-ng-model="emailData.email"
            ng-class="{'has-error': contactForm.email.$invalid && !contactForm.email.$pristine}"
            placeholder="Email"
            required
          />
          <span
            class="error-text"
            ng-show="contactForm.email.$invalid && !contactForm.email.$pristine"
          >
            Required! (e.g. username@email)
          </span>
        </div>
        <div>
          <label for="cf-message">Message</label>
          <textarea
            id="cf-message"
            type="text"
            name="message"
            ng-model="emailData.message"
            ng-minLength="10"
            ng-class="{'has-error': contactForm.message.$invalid && !contactForm.message.$pristine}"
            placeholder="Message"
            required
          ></textarea>
          <span
            class="error-text"
            ng-show="contactForm.message.$invalid && !contactForm.message.$pristine"
          >
            Required! (10 character minimum)
          </span>
        </div>
        <div>
          <button
            type="submit"
            ng-disabled="contactForm.$invalid"
            ng-class="contactForm.$invalid ? 'submit-disabled' : 'submit-enabled'"
            ng-click="contactForm.$setPristine()"
          >
            Send!
          </button>
          <span ng-show="$ctrl.success" class="msg-sent">Message sent!</span>
        </div>
			</form>
		</div>
	`
};

angular
  .module('RowdyMermaid-site.widgets')
  .component('contactForm', contactForm);
