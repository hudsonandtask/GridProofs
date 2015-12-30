(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('agGridController2', agGridController);

  /** @ngInject */
  function agGridController($scope, dataCreationService) {
    var agGridData = dataCreationService.getData(50);
    var columnDefs = dataCreationService.getColumnDefinitions(10, "ag-grid");

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: agGridData
    };
  }
})();
