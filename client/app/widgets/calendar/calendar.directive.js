function calendar() {
  return {
    link: link,
    restrict: 'E',
    template: `
      <div id="cal-container">
        <button class="fa fa-arrow-left"></button>
        <span>{{ currDate.format("MMMM YYYY") }}</span>
        <button class="fa fa-arrow-right"></button>
        <div id="cal-weekDays">
          <span ng-repeat="day in dayNames">{{ day }}</span>
        </div>
      </div>
    `
  };

  function link(scope) {
    scope.dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    scope.currDate = moment();
  }
}

angular.module('RowdyMermaid-site.widgets').directive('calendar', calendar);
