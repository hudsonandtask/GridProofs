(function() {
  'use strict';

  angular
    .module('gridProofs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
