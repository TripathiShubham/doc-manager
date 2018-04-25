angular.module('DocApp')
    .config(['$stateProvider', '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $stateProvider

                .state('login', {
                    url: '/login',
                    templateUrl: '/app/login-register/login.view.html',
                    controller: 'LoginController',
                    controllerAs: 'LoginCtrl'
                })

                .state('register', {
                    url: '/register',
                    templateUrl: '/app/login-register/register.view.html',
                    controller: 'RegisterController',
                    controllerAs: 'RegisterCtrl'
                })

                .state('forget', {
                    url: '/forget',
                    templateUrl: '/app/login-register/forget.view.html',
                    controller: 'ForgetController',
                    controllerAs: 'ForgetCtrl'
                })

                .state('reset', {
                    url: '/reset',
                    templateUrl: '/app/login-register/reset.view.html',
                    controller: 'ResetController',
                    controllerAs: 'ResetCtrl'
                })

                .state('dashboard', {
                    url: '/dashboard',
                    templateUrl: '/app/dashboard/dashboard.view.html',
                    controller: 'DashboardController',
                    controllerAs: 'DashboardCtrl'
                })

                .state('dashboard.landing', {
                    url: '/landing',
                    templateUrl: '/app/dashboard/landing/landing.view.html',
                    controller: 'LandingController',
                    controllerAs: 'LandingCtrl'
                })

            $urlRouterProvider.otherwise('/login');
        }])
    .run([
        function () {

        }])
