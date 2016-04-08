import angular from 'angular'
import 'angular-multi-transclude/dist/angular-multi-transclude.js'
import 'angular-ui-sortable/src/sortable.js'
import 'jquery'
import 'jquery-ui'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
import '../bower_components/fabric.js/dist/fabric.js'

var dependencies = [
    'ui.sortable'
];

export default angular.module('editor', dependencies)
    .directive('editor', require('./editor/index.js'))
    .directive('leftPanel', require('./left-panel/index.js'))
    .name
