(function() {
  'use strict';

  angular
    .module('gridProofs')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .when('/uiGrid', {
        templateUrl: 'app/uiGrid/uiGrid.html',
        controller: 'uiGridController2'
      })
      .when('/SlickGrid', {
        templateUrl: 'app/SlickGrid/SlickGrid.html',
        controller: 'slickGridController'
      })
      .when('/agGrid', {
        templateUrl: 'app/agGrid/agGrid.html',
        controller: 'agGridController2'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
