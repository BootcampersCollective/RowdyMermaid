function calendar() {
  return {
    link: link,
    restrict: 'E',
    // selected attribute will most likely need two-way data binding.
    selected: '=',
    template: `
      <div id="cal-container">
        <div id="cal-header">
          <button class="fa fa-angle-left" ng-click="prevMonth()"></button>
          <span>{{ titleMonth.format("MMMM YYYY") }}</span>
          <button class="fa fa-angle-right" ng-click="nextMonth()"></button>
        </div>
        <div id="cal-weekDays">
          <span ng-repeat="day in dayNames">{{ day }}</span>
        </div>
        <div>
          <div ng-repeat='week in weeksInMonth'>
            <div ng-click="select(day)" ng-repeat="day in week.daysInWeek"
                 ng-class='{"is-today": day.isToday, "inactive-month": !day.isCurrentMonth, selected: day.date.isSame(selected) }'>
              {{ day.dayName }} {{ day.day }} {{ day.isCurrentMonth }} {{ day.isToday }} {{ day.date }}
            </div>
          </div>
        </div>
      </div>
    `
  };

  function link(scope) {
    // Days in the week.
    scope.dayNames = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];

    // Initialize currently selected as the current date.
    scope.selected = moment();

    // This is used as the month/year display for the calendar title. Needs to
    // be cloned so when a date is selected that is not in the current month
    // (e.g., if a month starts mid-week, the previous days in the week will be
    // filled with the last days of the previous month), the calendar title
    // month does not change.
    scope.titleMonth = scope.selected.clone();

    // Since moment calls change the value of the moment object by reference,
    // need to copy to a local variable before manipulating the object. After
    // copied, set to first day of the month, and then to the first day of the
    // week. For example, if the first day of the month was on a Tuesday, the
    // first day of the week would be the previous Sunday with a month date
    // landing in the previous month.
    let begDate = scope.selected
      .clone()
      .date(1)
      .day(0);

    // Builds the dates for each week for the current month. Needs to take the
    // scope so that the array of weeks can be attached to the scope which is
    // passed by reference.
    _buildMonth(scope, begDate, scope.selected);

    // Sets 'selected' to the date for the day that is clicked on.
    scope.select = day => {
      scope.selected = day.date;
    };

    // Moves to the next month and builds the calendar for that month.
    scope.nextMonth = () => {
      let nextMonth = scope.titleMonth.clone();

      _buildMonth(
        scope,
        nextMonth
          .month(nextMonth.month() + 1)
          .date(1)
          .day(0),
        scope.titleMonth.month(scope.titleMonth.month() + 1)
      );
    };

    // Moves to the previous month and builds the calendar for that month.
    scope.prevMonth = () => {
      let prevMonth = scope.titleMonth.clone();

      _buildMonth(
        scope,
        prevMonth
          .month(prevMonth.month() - 1)
          .date(1)
          .day(0),
        scope.titleMonth.month(scope.titleMonth.month() - 1)
      );
    };
  }
}

function _buildMonth(scope, begMonth, currMonth) {
  // Array of objects where each object represents a week in the month
  // and contains an array of days for the respective week.
  scope.weeksInMonth = [];

  // Stores the number of the month (moment is zero-based so Jan = 0, Dec = 11);
  let mIdx = begMonth.month();
  // Copy so that the values can be modified without modifying the original.
  let month = begMonth.clone();

  // Calculates and pushes the first week. This needs to happen since the
  // first week could have mixed dates from the prev month and current month.
  scope.weeksInMonth.push({
    daysInWeek: buildWeekDays(month.clone(), currMonth)
  });
  // Move to the next week in the current month.
  month.add(1, 'w');

  do {
    // Store the index of the current month value.
    mIdx = month.month();
    // For each week object, push an array where each array index is a day in
    // the current week. Pass in a copy of 'month' so that it can be manipulated
    // without changing the month in this function.
    scope.weeksInMonth.push({
      daysInWeek: buildWeekDays(month.clone(), currMonth)
    });
    // Move to the next week in the current month.
    month.add(1, 'w');
    // Continue looping while in the same month.
  } while (mIdx === month.month());
}

// Builds each of the days for the week in the month passed in.
function buildWeekDays(weekDay, currMonth) {
  const NUM_DAYS_IN_WEEK = 7;

  let daysInWeek = [];
  for (let i = 0; i < NUM_DAYS_IN_WEEK; ++i) {
    // Pushes an object to the array where each day contains information
    // needed for the calendar day.
    daysInWeek.push({
      dayName: weekDay.format('dd').substring(0, 2),
      day: weekDay.date(),
      isCurrentMonth: weekDay.month() === currMonth.month(),
      isToday: weekDay.isSame(currMonth, 'day'),
      date: moment(weekDay)
    });
    // Move to the next day in the week.
    weekDay.add(1, 'd');
  }
  // Return the array of days to the calling routine.
  return daysInWeek;
}

angular.module('RowdyMermaid-site.widgets').directive('calendar', calendar);
