import './style.less'

export default /*@ngInject*/ function() {
  return {
    restrict: 'E',
    template: require('./template.html'),
    transclude: false,
    replace: true,
    scope: {
      canvas: "="
    },
    controllerAs: 'vm',
    bindToController: true,
    controller: /*@ngInject*/ function($rootScope) {
      var vm = this;
      var canvas = $rootScope.canvas;
      canvas.on({
        'object:selected': setParams
      });

      function setParams(options) {
        clearAll();
        console.log("vm.left", vm.left);
        console.log("options.target.left", options.target.left);
        vm.object = options.target.type;
        vm.fill = options.target.fill;
        vm.left = options.target.left;
        vm.top = options.target.top;
        vm.opacity = options.target.opacity;
        vm.radius = options.target.radius;
        vm.scaleX = options.target.scaleX;
        vm.scaleY = options.target.scaleY;
        console.log("vm.left", vm.left);
      }

      function clearAll() {
        vm.object = "";
        vm.fill = "";
        vm.left = 0;
        vm.top = "";
        vm.opacity = "";
        vm.radius = "";
        vm.scaleX = "";
        vm.scaleY = "";
      }
    }
  };
}
