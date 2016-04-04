import angular from 'angular'
import forEach from 'lodash/forEach'
import './style.less'

export default /*@ngInject*/ function() {
    return {
        restrict: 'E',
        template: require('./template.html'),
        replace: true,
        scope: {
            list: '='
        },
        controllerAs: 'vm',
        bindToController: true,
        controller: /*@ngInject*/ function($scope, $rootScope) {
            var vm = this;
            $scope.$watch('vm.text', function(text) {
                if (text && text.length >= 1) {
                    vm.questList = [];
                    forEach(vm.list, function(item){
                      if(item.title.indexOf(text) !== -1){
                        vm.questList.push(item);
                      }
                    });
                }else{
                  vm.questList = [];
                }
            });
            vm.setValue = function(text){
              $rootScope.$broadcast("quest.text", text);
              vm.text = "";
            }
        }
    };
}
