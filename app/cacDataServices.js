'use strict';
angular.module('cacDataServices', [])

.constant('CAC_API_PREFIX', 'http://api.geonames.org/countryInfoJSON?username=dansheard')

.factory('cacRequest', ['$http', '$q', 'CAC_API_PREFIX',
  function($http,   $q,   CAC_API_PREFIX) {
    return function(path) {
      var defer = $q.defer();
      $http.get(CAC_API_PREFIX)
        .success(function(data) {
          defer.resolve(data);
        })
      return defer.promise;
    }
  }])

  