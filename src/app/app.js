(define([
    'angularAMD',
    'angular-ui-router'
], function (angularAMD) {
    var app =   angular.module('blueDental', [

        // App Components

        // App Modules Dependencies
        'blueDental.dashboard',

        // External Dependencies
        'ui.router'
    ]);

    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

          $urlRouterProvider.otherwise("/");

    }]);

    angularAMD.bootstrap(app);
    return app;
})();
