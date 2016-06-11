/**
 * Created by Sunny on 16/6/5.
 */


var clickedTab = -1;
var itemExpanded = 0;


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
								map.enableScrollWheelZoom(true);
								  
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

    $scope.itemExpand = function(){
    	var div1 = document.getElementById('info-frame');
    	if(itemExpanded == 0){
    		div1.style.height= "100%";
    		itemExpanded = 1;
    	}
    	else{
    		div1.style.height= "55%";
    		itemExpanded = 0;
    	}
		
    }
    $scope.itemReturn = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/list";
    	div1.style.height = "100%";
    }
    $scope.commentReturn = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/overview";
    	div1.style.height = "55%";
    }
    $scope.openComment = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/comment";
    	div1.style.height = "80%";
    	$scope.cmtScore = 0;
    }
    $scope.filterClose = function(){
    	var div1 = document.getElementById('filter-frame');
    	
    	
		div1.style.height= "0";
    }
    	
    $scope.itemList = [[
    	{ text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"},
    	{ text: "同济大学", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"},
    	{ text: "交通大学", x: "121.44", y: "31.208", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"},
    	{ text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"}
    ],
    [
    	{ text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"}
    ],
    	
    [
    	
    	{ text: "同济大学", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"}
    	
    ],
    [
    	
    	{ text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674", score:"4.4"}
    ]

    ];
    
    $scope.typeList = [
    	{name: "大学", index: "0"},
    	{name: "热门景点", index: "1"},
    	{name: "饭店", index: "2"},
    	{name: "我是名字超他妈长的景点类别4啊哈哈哈哈你说我屌不屌啊", index: "3"}
    ];

	$scope.showItem = function(item){
		var map = new BMap.Map('baidu-map-api');
		var point = new BMap.Point(item.x, item.y);
		map.centerAndZoom(point, 15);
		map.enableScrollWheelZoom(true);
		var marker = new BMap.Marker(point);
		map.addOverlay(marker);
		$scope.selectItem = item;
		window.location.href = "#/main/overview";
		var div1 = document.getElementById('info-frame');
		div1.style.height = "55%";
		var tmp = $scope.selectItem.s5*50/$scope.selectItem.ssum+"%";
		$scope.myObj5 = {
        	"width" : tmp 
    	};
    	tmp = $scope.selectItem.s4*50/$scope.selectItem.ssum+"%";
		$scope.myObj4 = {
        	"width" : tmp 
    	};
    	tmp = $scope.selectItem.s3*50/$scope.selectItem.ssum+"%";
		$scope.myObj3 = {
        	"width" : tmp 
    	};
    	tmp = $scope.selectItem.s2*50/$scope.selectItem.ssum+"%";
		$scope.myObj2 = {
        	"width" : tmp 
    	};
    	tmp = $scope.selectItem.s1*50/$scope.selectItem.ssum+"%";
		$scope.myObj1 = {
        	"width" : tmp 
    	};
		itemExpanded = 0;
		if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}

    	
	}
	
	$scope.hoverScore = function(score){
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
	$scope.leaveScore = function(){
		for(i = 1; i <= 5; i++ ){
			if(i <= $scope.cmtScore){
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
	$scope.setScore = function(score){
		$scope.cmtScore = score;
	}


  })
;




