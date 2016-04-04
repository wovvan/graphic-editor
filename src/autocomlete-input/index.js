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
                    vm.autocompleteList = [];
                    forEach(vm.list, function(item){
                      if(item.title.indexOf(text) !== -1){
                        vm.autocompleteList.push(item);
                      }
                    });
                }else{
                  vm.autocompleteList = [];
                }
            });
            vm.setValue = function(text){
              $rootScope.$broadcast("autocomplete.text", text);
              vm.text = "";
            }
        }
    };
}
