/**
 * Created by Sunny on 16/6/26.
 */
angular.module('app.profile-controller', [])
.controller('loginCtrl', function($scope){
  $scope.switchReg = function(){
    window.location.href = "#/main/account-register";
  }
})
.controller('registerCtrl', function($scope){
  $scope.switchLog = function(){
    window.location.href = "#/main/account-login";
  }
});
