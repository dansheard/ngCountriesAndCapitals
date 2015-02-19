angular.module('cacApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '/home/home.html',
      controller : 'HomeCtrl as home'
    })
    .otherwise({
        redirectTo : '/'
    })
  })

  // .run(function($rootScope, $location, $timeout) {
  //   $rootScope.$on('$routeChangeError', function() {
  //     $location.path("/error");
  //   });
  //   $rootScope.$on('$routeChangeStart', function() {
  //     $rootScope.isLoading = true;
  //   });
  //   $rootScope.$on('$routeChangeSuccess', function() {
  //     $timeout(function() {
  //       $rootScope.isLoading = false;
  //     }, 500);
  //   });
  // })

  .controller('HomeCtrl', function() {
    vm = this;
  })


