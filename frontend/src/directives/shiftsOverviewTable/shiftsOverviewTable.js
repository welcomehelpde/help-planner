(function () {
    'use strict';

    angular.module('HelpPlanner')
        .directive('hpShiftsOverviewTable', () => {
            return {
                templateUrl: 'assets/directives/shiftsOverviewTable/shiftsOverviewTable.html',
                restrict: 'A',
                scope: {shifts: '=hpShiftsOverviewTable'}
            };
        });
})();