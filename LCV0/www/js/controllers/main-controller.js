/**
 * Created by Sunny on 16/6/5.
 */


var clickedTab = -1;
var clickCount = 0;

angular.module('app.main-controller', [])

  .controller('mainCtrl', function($scope, $ionicSideMenuDelegate, $ionicTabsDelegate) {
    $scope.leftSide = function() {
    	$ionicSideMenuDelegate.toggleLeft(true);
    	if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}
    	$ionicSideMenuDelegate.canDragContent(false);
    	window.location.href = "#/main/mainlist";
    };
    $scope.itemClick = function(index) {
    	if(clickCount == 0){
    		var div1 = document.getElementById('info-frame');
    		if(clickedTab == index){
    			div1.style.height = "0";
    			clickedTab = -1;
    		}
    		else{
    			
    			clickedTab = index;
    			switch (index){
    				case 0:
    					window.location.href = "#/main/list";
    					div1.style.height = "100%";
    					break;
    				case 2:
    					window.location.href = "#/main/history";
    					div1.style.height = "100%";
    					break;
    				default:
    					div1.style.height = "50%";
    					break;
    			}
    		}
    		clickCount = 1;
    	}
    	else{
    		clickCount = 0;
    	}


    	
    	$ionicTabsDelegate.select(index);
    	
    	
    };
    
    $scope.closeItemList = function(){
    	if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}else{
    		var div1 = document.getElementById('info-frame');
    		div1.style.height = "0";
    		clickedTab = -1;
    	}
    }	
    	


    	
    
    
  })
;


