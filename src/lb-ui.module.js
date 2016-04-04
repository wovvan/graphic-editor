import angular from 'angular'
import 'angular-multi-transclude/dist/angular-multi-transclude.js'
import 'angular-ui-sortable/src/sortable.js'
import 'jquery'
import 'jquery-ui'

var dependencies = [
    'ui.sortable'
];

export default angular.module('lb-ui', dependencies)
    .directive('questInput', require('./autocomlete-input/index.js'))
    .directive('simpleTable', require('./simple-table/index.js'))
    .name
