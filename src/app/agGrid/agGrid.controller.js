(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('agGridController', agGridController);

  /** @ngInject */
  function agGridController() {
    alert('I am the AG Grid!!');
  }
})();
