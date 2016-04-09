import angular from 'angular'
import './style.less'
export default /*@ngInject*/ function() {
  var vm = this;
  document.getElementById("c").width = "1200";
  document.getElementById("c").height ="700";
  vm.canvas = new fabric.Canvas('c');
  fabric.Object.prototype.transparentCorners = false;

}
