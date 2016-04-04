import angular from 'angular'
import 'imports?$=jquery!jquery';
import uiRouter from 'angular-ui-router'
import cssReset from 'css-reset/reset.css'
import 'font-awesome-webpack'
import './moon-icon.css'
import _ from 'lodash'

var deps = [
    uiRouter,
    require('./lb-ui.module')
];

angular.module('autocomplete', deps)
    .run( /*@ngInject*/ function($state, $rootScope) {})
    .config(require('./states'));
