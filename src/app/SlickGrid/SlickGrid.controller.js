(function() {
  'use strict';

  angular
    .module('gridProofs')
    .controller('slickGridController', slickGridController);

  /** @ngInject */
  function slickGridController() {
    alert('I am the Slick Grid!!');
  }
})();
