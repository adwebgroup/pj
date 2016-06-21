/**
 * Created by dancerphil on 2016/6/21.
 */

angular.module('app.main-controller', [])
	.controller('testCtrl', function($scope2) {

		console.log('testCtrl')
		//下面三个方法用于评分时显示五颗星星，悬浮时点亮相应颗数，离开时显示已选评分颗数
		$scope2.hoverScore = function(score){
			for(i = 1; i <= 5; i++ ){
				if(i <= score){
					var div1 = document.getElementById('score'+i);
					div1.style.backgroundColor = "#ef473a";
					div1.style.color = "#fff";
				}else{
					var div1 = document.getElementById('score'+i);
					div1.style.backgroundColor = "#f8f8f8";
					div1.style.color = "#444";
				}
			}
		}
		$scope2.leaveScore = function(){
			for(i = 1; i <= 5; i++ ){
				if(i <= $scope2.cmtScore){
					var div1 = document.getElementById('score'+i);
					div1.style.backgroundColor = "#ef473a";
					div1.style.color = "#fff";
				}else{
					var div1 = document.getElementById('score'+i);
					div1.style.backgroundColor = "#f8f8f8";
					div1.style.color = "#444";
				}
			}
		}
		$scope2.setScore = function(score){
			$scope2.cmtScore = score;
		}
	})
;




