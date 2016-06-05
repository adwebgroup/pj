// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

app.controller('myCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.leftSide = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };

});

app.controller('SlideController', function($scope) {
      
  $scope.myActiveSlide = 0;
      
});
/*
app.controller('myCtrl', function($scope, $ionicModal){
  $ionicModal.fromTemplateUrl('templates/list.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

});
*/


app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('list',{
      url:"/list",
      views:{
        'left':{
          templateUrl: "templates/list.html",
          controller: 'SlideController'
        }
      }
    })
    .state('list1',{
      url:"/list",
      views:{
        'list':{
          templateUrl: "templates/list1.html"
        }
      }
    });
  $urlRouterProvider.otherwise("/list");
});


