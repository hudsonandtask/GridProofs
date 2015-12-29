(function() {
  'use strict';

  angular
    .module('gridProofs')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/uiGrid', {
        templateUrl: 'app/uiGrid/uiGrid.html',
        controller: 'uiGridController',
      })
      .when('/SlickGrid', {
        templateUrl: 'app/SlickGrid/SlickGrid.html',
        controller: 'slickGridController',
      })
      .when('/agGrid', {
        templateUrl: 'app/agGrid/agGrid.html',
        controller: 'agGridController',
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
