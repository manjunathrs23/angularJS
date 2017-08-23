(function(){
'use strict';
angular.module('mainApp',['ui.router'])
.config(function($stateProvider,$httpProvider){
  $stateProvider
    .state('home',{
      url:'/',
      templateUrl:'home.html',
      controller:'homeController'
    });
  
  //Enable cross domain calls
  $httpProvider.defaults.useXDomain = true;

  //Remove the header containing XMLHttpRequest used to identify ajax call 
  //that would prevent CORS from working
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  
});

})();
