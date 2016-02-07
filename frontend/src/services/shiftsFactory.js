(function () {
    'use strict';

    angular.module('HelpPlanner')
        .factory('shifts', ($q) => {
            return {
                findAll: (organization) => {
                    let y = 2016, m = 1, d = 6;
                    return $q.when([
                        {id: 1, name: 'Mittagessen verteilen', begintime: new Date(2016, 1, 2, 11, 30), endtime: new Date(2016, 1, 2, 14, 0), location: 'Essensausgabe II'}
                    ]);
                }
            };
        });
})();