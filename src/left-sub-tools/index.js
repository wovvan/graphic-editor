import './style.less'

export default /*@ngInject*/ function() {
  return {
    restrict: 'E',
    template: require('./template.html'),
    transclude: false,
    replace: true,
    scope: {},
    controllerAs: 'vm',
    bindToController: true,
    controller: /*@ngInject*/ function($scope, $rootScope, $timeout) {
      var vm = this;
      var canvas = $rootScope.canvas;

      canvas.on({
        'object:selected': setParams,
        'object:modified': setParams
      });

      $scope.$watchCollection('vm.target', function(){
        canvas.renderAll();
      });
      
      vm.removeItem = function(){
        canvas.remove(vm.target);
      }

      function setParams(options) {
        vm.object = options.target.type;
        vm.target = options.target;
        $scope.$apply();
      }
    }
  };
}
