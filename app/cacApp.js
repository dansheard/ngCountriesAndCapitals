'use strict';
angular.module('cacApp', ['cacDataServices', 'ngRoute', 'ngAnimate'])
  .config([
    '$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

    $routeProvider
        $routeProvider
        .when("/", {
            templateUrl: "home/home.html",
            controller: "HomeCtrl"
        })
        .when("/countries", {
            templateUrl: "countries/countries.html",
            controller: "CountriesCtrl"
        })

        .otherwise({
            redirectTo: '/'
        });
      }
  ]);

