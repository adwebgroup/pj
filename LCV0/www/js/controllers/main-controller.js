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
    				case 1:
    					var map = new BMap.Map('baidu-map-api');

    					var geolocation = new BMap.Geolocation();  //实例化浏览器定位对象。
						geolocation.getCurrentPosition(function(r){   //定位结果对象会传递给r变量
							if(this.getStatus() == BMAP_STATUS_SUCCESS){  
								var mk = new BMap.Marker(r.point);    
								map.addOverlay(mk);    
								map.centerAndZoom(r.point, 14);
								  
							}
    						else {
								alert('failed'+this.getStatus());
    						}        
						});
    					window.location.href = "#/main/nearby";
    					div1.style.height = "40%";
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
    	
    $scope.itemList = [
    	{ text: "复旦大学", x: "121.51", y: "31.302"},
    	{ text: "同济大学", x: "121.513", y: "31.288"},
    	{ text: "我是景点3", x: "121.513", y: "31.288"},
    	{ text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.513", y: "31.288"}
    ];
    
	$scope.showItem = function(item){
		var map = new BMap.Map('baidu-map-api');
		var point = new BMap.Point(item.x, item.y);
		map.centerAndZoom(point, 15);
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
	}

  })
;




