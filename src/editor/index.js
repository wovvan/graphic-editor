import './style.less'
export default /*@ngInject*/ function() {
  return {
    restrict: 'E',
    template: require('./template.html'),
    transclude: false,
    replace: true,
    controllerAs: 'vm',
    bindToController: true,
    controller: /*@ngInject*/ function($rootScope) {
      var vm = this;
    }
  };
}