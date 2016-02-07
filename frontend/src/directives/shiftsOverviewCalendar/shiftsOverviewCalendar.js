(function () {
    'use strict';

    angular.module('HelpPlanner')
        .directive('hpShiftsOverviewCalendar', () => {
            return {
                templateUrl: 'assets/directives/shiftsOverviewCalendar/shiftsOverviewCalendar.html',
                restrict: 'A',
                scope: {shifts: '=hpShiftsOverviewCalendar'},
                link: (scope, elements, attrs) => {
                    scope.calendarEventSources = [scope.shifts.map((shift) => {
                        return {
                            title: shift.name,
                            start: shift.begintime,
                            end: shift.endtime
                        };
                    })];
                }
            };
        });
})();