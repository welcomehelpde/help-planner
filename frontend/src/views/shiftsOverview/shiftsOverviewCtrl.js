(function () {
    'use strict';

    angular.module('HelpPlanner')
        .controller('shiftsOverviewCtrl', ($scope, shifts) => {
            $scope.viewStyle = 'calendar';

            shifts.findAll().then((shifts) => {
                $scope.shifts = shifts;
            });
        });

})();