import './style.less'
export default /*@ngInject*/ function() {
    return {
        restrict: 'E',
        template: require('./template.html'),
        transclude: false,
        replace: true,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          canvas: '='
        },
        controller: /*@ngInject*/ function($rootScope) {
            var vm = this;
            var rect1 = new fabric.Rect({
                width: 200,
                height: 100,
                left: 0,
                top: 50,
                angle: 30,
                fill: 'rgba(255,0,0,0.5)'
            });
            vm.canvas.add(rect1);
            vm.canvas.on({
                'object:moving': onChange,
                'object:scaling': onChange,
                'object:rotating': onChange,
            });
            function onChange(options) {
                options.target.setCoords();
                vm.canvas.forEachObject(function(obj) {
                    if (obj === options.target) return;
                    obj.setOpacity(options.target.intersectsWithObject(obj) ? 0.5 : 1);
                });
            }

        }
    };
}
