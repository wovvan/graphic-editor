import './style.less'
import remove from 'lodash/remove'
export default /*@ngInject*/ function() {
    return {
        restrict: 'E',
        template: require('./template.html'),
        transclude: false,
        replace: true,
        controllerAs: 'ctrl',
        bindToController: true,
        controller: /*@ngInject*/ function($rootScope) {
            var ctrl = this;
            ctrl.simpleTable = [];
            $rootScope.$on('autocomplete.text', addTextInTable.bind(this));
            ctrl.deleteItem = function(data){
              remove(ctrl.simpleTable, function(item) {
                return item.id === data.id;
              });
            }
            var counter = 0;
            function addTextInTable(e, text) {
                counter++; // unique entry in the table (for remove)
                ctrl.simpleTable.push({id:counter, text:text});
            }
        }
    };
}
