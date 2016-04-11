import angular from 'angular'
import 'angular-multi-transclude'
import 'angular-ui-sortable'
import 'angular-animate'
import 'angular-aria'
import 'angular-messages'
import 'angular-material/angular-material.css'
import 'angular-material'
import 'jquery'
import 'jquery-ui'
import Snap from 'imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js'
import '../bower_components/fabric/dist/fabric.js'

var dependencies = [
    'ui.sortable',
    'ngMaterial'
];

export default angular.module('editor', dependencies)
    .directive('editor', require('./editor/index.js'))
    .directive('leftTools', require('./left-tools/index.js'))
    .directive('leftSubTools', require('./left-sub-tools/index.js'))
    .service('ShapesSvc', require('./shapes/service.js'))
    .name
