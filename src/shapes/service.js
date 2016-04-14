import angular from 'angular'
export default /*@ngInject*/ function($rootScope) {
  var canvas;
  $rootScope.$on('canvasChenged', () => canvas = $rootScope.canvas);

  var addSquare = function() {
    var square = new fabric.Rect({
      width: 100,
      height: 100,
      left: 550,
      top: 300,
      angle: 0,
      fill: 'rgb(0,200,0)'
    });
    canvas.add(square);
  }

  var addCircle = function() {
    var сircle = new fabric.Circle({
      radius: 50,
      left: 550,
      top: 300,
      fill: '#aac'
    });
    canvas.add(сircle);
  }

  var addTriangle = function() {
    var triangle = new fabric.Triangle({
      width: 100,
      height: 100,
      left: 550,
      top: 300,
      angle: 0,
      fill: '#cca'
    });
    canvas.add(triangle);
  }

  var addShape = function(name) {
    if (name === 'square') {
      addSquare();
    }
    if (name === 'circle') {
      addCircle();
    }
    if (name === 'triangle') {
      addTriangle();
    }
  }

  return {
    addShape: addShape
  }
}