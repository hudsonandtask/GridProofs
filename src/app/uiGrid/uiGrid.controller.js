(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('uiGridController', uiGridController);

  /** @ngInject */
  function uiGridController($scope, dataCreationService) {
    var vm = this;
    vm.data = dataCreationService.initializeData(10);
  }
})();
