/**
 * Created by Sunny on 16/6/5.
 */
angular.module('app.main-controller', [])

  .controller('mainCtrl', function($scope, $ionicSideMenuDelegate) {
    $scope.leftSide = function() {
      $ionicSideMenuDelegate.toggleLeft();
    };

    
  })
;
