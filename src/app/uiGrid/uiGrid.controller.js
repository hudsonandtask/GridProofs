(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('uiGridController', uiGridController);

  /** @ngInject */
  function uiGridController($scope, dataCreationService) {
    $scope.uiGridData = dataCreationService.getData(2);
  }
})();
