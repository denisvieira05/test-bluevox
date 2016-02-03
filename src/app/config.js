(function () {
    angular.module('blueDental').constant('APP_SETTINGS', {
        "API_URL": "https://private-fc235-bluedental.apiary-mock.com"
    });

    angular.module('blueDental').run(function ($rootScope, $location) {
        $rootScope.user = null;
        $rootScope.currentPath = $location.path();
        console.log($rootScope.currentPath);

    });
})();
