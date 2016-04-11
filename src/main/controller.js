import angular from 'angular'
import './style.less'
export default /*@ngInject*/ function($rootScope) {
  var vm = this;
  document.getElementById("c").width = "1200";
  document.getElementById("c").height ="700";
  var canvas = new fabric.Canvas('c');
  $rootScope.canvas = canvas;
  $rootScope.$broadcast('canvasChenged');
  fabric.Object.prototype.transparentCorners = false;

}
