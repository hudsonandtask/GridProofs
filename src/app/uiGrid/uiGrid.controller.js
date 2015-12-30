(function () {
  'use strict';

  angular
    .module('gridProofs')
    .controller('uiGridController2', uiGridController);

  /** @ngInject */
  function uiGridController($scope, dataCreationService) {
    var uiGridData = dataCreationService.getData(10);
    var columnDefs = dataCreationService.getColumnDefinitions(10, "ui-grid");

    $scope.gridOptions = {
        columnDefs: columnDefs,
        data: uiGridData
    };
  }
})();
