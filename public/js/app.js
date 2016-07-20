// Declare app level module which depends on filters, and services
angular.module('myapp', ['ngResource', 'ngRoute', 'ui.bootstrap', 'ui.date'])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeController'})
      .when('/feature', {
        templateUrl: 'views/feature/feature.html',
        controller: 'FeatureController'})
      .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);

  }]);
