require.config({
    baseUrl: "app",

    // alias libraries paths.  Must set 'angular'
    paths: {
        'jquery': './lib/jquery/dist/jquery.min'
        'angular': './lib/angular/angular.min.js',
        'angular-ui-router': './lib/angular-ui-router/release/angular-ui-router.min',
        'angularAMD': './lib/angularAMD/angularAMD.min',
        'angular-materialize': './lib/angular-materialize/src/angular-materialize',
    },

    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-ui-router': ['angular']
    },

    // kick start application
    deps: ['app']
});
