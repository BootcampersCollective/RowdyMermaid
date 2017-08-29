const taproomEvents = {
  bindings: {},
  controller: function() {
    let ctrl = this;
    ctrl.taproomEvents = null;

    ctrl.$onInit = function() {};
  },
  template: `
    <div id="events-parallax">
      <div id="parallax-text">
        <h1>Events</h1>
      </div>
    </div>

    <div>
      Calendar will go in this div.
    </div>
	`,
};

angular
  .module('RowdyMermaid-site.taproomEvents')
  .component('taproomEvents', taproomEvents);

taproomEvents.$inject = [];
