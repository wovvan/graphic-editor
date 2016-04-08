import angular from 'angular'
import './style.less'
export default /*@ngInject*/ function() {
  var vm = this;
  vm.canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;
}
