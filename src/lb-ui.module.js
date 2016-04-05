import angular from 'angular'
import 'angular-multi-transclude/dist/angular-multi-transclude.js'
import 'angular-ui-sortable/src/sortable.js'
import 'jquery'
import 'jquery-ui'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'

var dependencies = [
    'ui.sortable'
];

export default angular.module('lb-ui', dependencies)
    .directive('autocompleteInput', require('./autocomlete-input/index.js'))
    .directive('simpleTable', require('./simple-table/index.js'))
    .name
