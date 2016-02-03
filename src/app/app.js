(function(){
        angular.module('blueDental', [

        // App Components

        // App Modules Dependencies
        'blueDental.dashboard',

        // External Dependencies
        'ui.router'
    ])
    .config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/");

    }]);
})();
