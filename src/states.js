export default /*@ngInject*/ function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode({
        requireBase: true,
        enabled: true
    });
    $stateProvider
        .state('main', {
            url: '/',
            template: require('./main/template.html'),
            controller: require('./main/controller.js'),
            controllerAs: 'vm'
        })
}
