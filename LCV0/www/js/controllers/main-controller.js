/**
 * Created by Sunny on 16/6/5.
 */


var clickedTab = -1;

angular.module('app.main-controller', [])

  .controller('mainCtrl', function($scope, $ionicSideMenuDelegate, $ionicTabsDelegate) {
    //$ionicSideMenuDelegate.canDragContent(false);
    $scope.leftSide = function() {
    	
    	$ionicSideMenuDelegate.toggleLeft(true);
    	if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}
    	
    	window.location.href = "#/main/mainlist";
    };
    $scope.itemClick = function(index) {
    	
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
    	
    $scope.filterExpand = function(){
    	var div1 = document.getElementById('filter-frame');
    	
		div1.style.height= "200px";
    }

    $scope.filterClose = function(){
    	var div1 = document.getElementById('filter-frame');
    	
    	
		div1.style.height= "0";
    }
    	
    
    
  })
;


