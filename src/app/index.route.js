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
        controllerAs: 'uiGridData'
      })
      .when('/SlickGrid', {
        templateUrl: 'app/SlickGrid/SlickGrid.html',
        controller: 'slickGridController',
        controllerAs: 'SlickGridData'
      })
      .when('/agGrid', {
        templateUrl: 'app/agGrid/agGrid.html',
        controller: 'agGridController',
        controllerAs: 'agGridData'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
