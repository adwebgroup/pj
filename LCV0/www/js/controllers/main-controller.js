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

    $scope.filterClose = function(){
    	var div1 = document.getElementById('filter-frame');
    	
    	
		div1.style.height= "0";
    }
    	
    $scope.itemList = [[
    	{ text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"},
    	{ text: "同济大学", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"},
    	{ text: "交通大学", x: "121.44", y: "31.208", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"},
    	{ text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"}
    ],
    [
    	{ text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"}
    ],
    	
    [
    	
    	{ text: "同济大学", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"}
    	
    ],
    [
    	
    	{ text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.513", y: "31.288", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", ssum:"6674"}
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

		window.location.href = "#/main/overview";
		var div1 = document.getElementById('info-frame');
		div1.style.height = "55%";
		itemExpanded = 0;
	}

  })
;




