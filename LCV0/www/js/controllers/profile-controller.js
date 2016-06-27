/**
 * Created by Sunny on 16/6/26.
 */
angular.module('app.profile-controller', [])
.controller('loginCtrl', function($scope,$ionicActionSheet){
  $scope.switchReg = function(){
    window.location.href = "#/main/account-register";
  };

  $scope.user={userPortrait:"img/ben.png"};

  $scope.show = function() {

    $ionicActionSheet.show({
      buttons: [
        { text: '选择头像' },
        { text: '上传头像' }
      ],
      cancelText: 'Cancel',
      cancel: function() {
        window.location.href = "#/main/account-login";
      },
      buttonClicked: function(index) {
        switch(index){
          case 0: $('#picture').click();return false;
          case 1: $scope.uploadIcon();
            //alert($('#picture').val());
            return true;
        }

      }
    });
  };

  $scope.uploadIcon = function () {

    var s="http://localhost:8080/CSServer/UserImgUpload";
    var formData = new FormData($('#iconForm')[0]);
    $.ajax({
      url: s,  //Server script to process data
      type: 'POST',
      data:formData,
      cache: false,
      contentType: false,
      processData: false,
      success: function(){

      }
    });
  }
})
.controller('registerCtrl', function($scope){
  $scope.switchLog = function(){
    window.location.href = "#/main/account-login";
  }
});
