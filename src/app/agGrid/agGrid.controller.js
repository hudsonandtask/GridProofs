(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('agGridController', agGridController);

  /** @ngInject */
  function agGridController($scope, dataCreationService) {
    var agGridData = dataCreationService.getData(10);
    var columnDefs = dataCreationService.getColumnDefinitions(10);

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: agGridData
    };

  }

})();
