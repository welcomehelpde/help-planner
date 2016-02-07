(function () {
    'use strict';

    angular.module('HelpPlanner')
        .controller('organizationStartCtrl', ($scope, $state, $stateParams, organizations) => {
            organizations.findBySlug($stateParams.organization)
                .then(
                    (organization) => $scope.organization = organization,
                    () => $state.go('notfound')
                );
        });
})();