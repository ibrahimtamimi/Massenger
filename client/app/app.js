angular.module('Messenger', [
  'Messenger.services',
  'Messenger.auth',
  'TeamUp.profile',
  'ngRoute',
  'ngMap',
  'ngMaterial',
  'ngMessages',
  'ngFileUpload',
  'TeamUp.find'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'index.html',
      controller: ''
    })
    .when('/login', {
      templateUrl: 'app/Auth/login.html',
      controller: 'AuthController'
    })
    // .when('/profile/:id', {
    //   templateUrl: 'app/profile/profile.html',
    //   controller: 'profileController',
    // })
    .otherwise({
      redirectTo: '/'
    });
    
});

//======================================================================================
/*                                     facebook Auth                                  */
//======================================================================================
//var secret = '7ba8efed3d619c30658079c513ff2f4f';
//var ID = '1563637017279611';





  window.fbAsyncInit = function() {
    FB.init({
      appId      : '603126229866592',
      xfbml      : true,
      version    : 'v2.8'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
