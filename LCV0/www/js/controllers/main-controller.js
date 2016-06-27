/**
 * Created by Sunny on 16/6/5.
 */


var clickedTab = -1;
var itemExpanded = 0;
var markerList = new Array();
var markerListExist = new Array();
var markerNearbyList = new Array();
var marker = null;
//var orderState = 0;
var gItemList =
    [
        {scenery:{id:0, name:"复旦大学", positionLatitude:121.51, positionLongitude:31.302, brief:"景点一的简介", detail:"景点一的详情",type:0 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1},
        {scenery:{id:1, name:"同济大学", positionLatitude:121.513, positionLongitude:31.288, brief:"景点一的简介", detail:"景点一的详情",type:0 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1},
        {scenery:{id:2, name:"交通大学", positionLatitude:121.44, positionLongitude:31.208, brief:"景点一的简介", detail:"景点一的详情",type:0 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1},
        {scenery:{id:3, name:"我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", positionLatitude:121.6007, positionLongitude:31.197, brief:"景点一的简介", detail:"景点一的详情",type:0 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1},
        {scenery:{id:4, name:"复旦大学", positionLatitude:121.51, positionLongitude:31.302, brief:"景点一的简介", detail:"景点一的详情",type:1 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1},
        {scenery:{id:5, name:"同济大学", positionLatitude:121.513, positionLongitude:31.288, brief:"景点一的简介", detail:"景点一的详情",type:2 }, scores:[1,2,0,3,4], collection: 3, track: 2, wishlist:1}

    ];
  /*[[
		{ parent:"0", index: "0", text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", s0:"0", ssum:"6674", score:"4.4", collection:"10000", track:"10000", wishlist:"10000", brief:"复旦大学（Fudan University），简称“复旦”，位于首批沿海开放城市上海市，由中华人民共和国教育部直属，中央直管副部级建制，位列“211工程”、“985工程”，入选“珠峰计划”、“111计划”、“2011计划”、“卓越医生教育培养计划”，为“九校联盟”成员、东亚研究型大学协会成员、环太平洋大学协会成员、21世纪大学协会成员，是一所综合性研究型的全国重点大学。", detail:"复旦大学由原复旦大学、原上海医科大学合并而成。复旦大学创建于1905年，原名复旦公学，是中国人自主创办的第一所高等院校，创始人为中国近代知名教育家马相伯，首任校董为国父孙中山先生。校名“复旦”二字选自《尚书大传·虞夏传》中“日月光华，旦复旦兮”的名句，意在自强不息，寄托当时中国知识分子自主办学、教育强国的希望。1917年复旦公学改名为私立复旦大学；1937年抗战爆发后，学校内迁重庆北碚，并于1941年改为“国立”；1946年迁回上海江湾原址；1952年全国高等学校院系调整后，复旦大学成为以文理科为基础的综合性大学；1959年成为全国重点大学。2000年，与原上海医科大学合并成立新的复旦大学。复旦师生谨记“博学而笃志，切问而近思”的校训，严守“文明、健康、团结、奋发”的校风，力行“刻苦、严谨、求实、创新”的学风，发场“爱国奉献、学术独立、海纳百川、追求卓越”的复旦精神，以服务国家为己任，以培养人才为根本，以改革开放为动力，为实现中国梦作出新贡献。"},
		{ parent:"0", index: "1", text: "同济大学", x: "121.513", y: "31.288", s5: "5", s4:"5", s3:"5", s2:"0", s1:"0", s0:"0", ssum:"15", score:"4.0", collection:"9000", track:"99", wishlist:"1", brief:"同济大学（Tongji University），简称同济，是中华人民共和国教育部直属，由教育部和上海市“共建”的全国重点大学，是历史悠久、享有盛誉的中国著名高等学府，是国家“211工程”、“985工程”重点建设高校，也是收生标准最严格的中国大学之一", detail:"同济大学的前身是1907年德国医生埃里希·宝隆在上海创办的德文医学堂；翌年改名同济德文医学堂；1912年与创办不久的同济德文工学堂合并，更名为同济德文医工学堂；1923年正式定名为大学；1927年成为国立同济大学，是中国最早的七所国立大学之一。同济大学始终把培养拔尖创新人才作为崇高使命和责任，造就了一大批杰出的政治家、科学家、教育家、社会活动家、企业家、医学专家和工程技术专家，校友中当选中国科学院、中国工程院两院院士的有140余人。截至2014年12月，同济大学设有36个学院（系）和二级办学机构，7家附属医院，4所附属中学；学校有全日制本科生18005人、硕士研究生13644人、博士研究生4504人，另有攻读学位外国留学生2477人；学校占地面积2567863平方米；图书437.1万册。"},
		{ parent:"0", index: "2", text: "交通大学", x: "121.44", y: "31.208", s5: "100", s4:"200", s3:"250", s2:"200", s1:"100", s0:"0", ssum:"850", score:"3.0", collection:"20000", track:"0", wishlist:"100", brief:"上海交通大学（Shanghai Jiao Tong University）位于中国的经济、金融中心上海，教育部直属，具有理工特色，涵盖理、工、医、经、管、文、法等9大学科门类的综合性全国重点大学，中国首批七所“211工程”、首批九所“985工程重点建设”院校之一，入选“珠峰计划”、“111计划”、“2011计划”、“卓越医生教育培养计划”、“卓越法律人才教育培养计划”、“卓越工程师教育培养计划”、“卓越农林人才教育培养计划”，是“九校联盟”、Universitas 21、21世纪学术联盟的重要成员。现有徐汇、闵行、黄浦、长宁、七宝、浦东等校区，总占地面积4893亩。", detail:"办学历史可追溯到1896年（光绪22年）由清政府创立、盛宣怀督办的南洋公学，是中国高等教育的数个发端之一。1921年改组为交通大学（Chiao Tung University）；而后复遭波折，历交通部南洋大学、交通部第一交通大学、国立交通大学（上海本部），至1949年剔去“国立”二字，径称“交通大学”。1959年7月31日，国务院批准交通大学上海部分、西安部分分别独立为两所学校，交通大学上海部分定名为“上海交通大学”。1999年，原上海农学院并入。2005年7月，上海第二医科大学并入上海交通大学。上海交通大学是中国最著名的高等学府之一，在工学、商学、医学领域拥有崇高的学术影响力。2016年5月，上海交通大学成为国务院首批双创“高校和科研院所示范基地”。"},
		{ parent:"0", index: "3", text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.6007", y: "31.197", s5: "77", s4:"119", s3:"584", s2:"1930", s1:"3964", s0:"0", ssum:"6674", score:"1.6", collection:"0", track:"0", wishlist:"99999", brief:"很明显这个地方是我瞎扯淡", detail:"很明显这个地方是我瞎扯淡"}
	], [
		{ parent:"1", index: "0", text: "复旦大学", x: "121.51", y: "31.302", s5: "3964", s4:"1930", s3:"584", s2:"119", s1:"77", s0:"0", ssum:"6674", score:"4.4", collection:"10000", track:"10000", wishlist:"10000", brief:"复旦大学（Fudan University），简称“复旦”，位于首批沿海开放城市上海市，由中华人民共和国教育部直属，中央直管副部级建制，位列“211工程”、“985工程”，入选“珠峰计划”、“111计划”、“2011计划”、“卓越医生教育培养计划”，为“九校联盟”成员、东亚研究型大学协会成员、环太平洋大学协会成员、21世纪大学协会成员，是一所综合性研究型的全国重点大学。", detail:"复旦大学由原复旦大学、原上海医科大学合并而成。复旦大学创建于1905年，原名复旦公学，是中国人自主创办的第一所高等院校，创始人为中国近代知名教育家马相伯，首任校董为国父孙中山先生。校名“复旦”二字选自《尚书大传·虞夏传》中“日月光华，旦复旦兮”的名句，意在自强不息，寄托当时中国知识分子自主办学、教育强国的希望。1917年复旦公学改名为私立复旦大学；1937年抗战爆发后，学校内迁重庆北碚，并于1941年改为“国立”；1946年迁回上海江湾原址；1952年全国高等学校院系调整后，复旦大学成为以文理科为基础的综合性大学；1959年成为全国重点大学。2000年，与原上海医科大学合并成立新的复旦大学。复旦师生谨记“博学而笃志，切问而近思”的校训，严守“文明、健康、团结、奋发”的校风，力行“刻苦、严谨、求实、创新”的学风，发场“爱国奉献、学术独立、海纳百川、追求卓越”的复旦精神，以服务国家为己任，以培养人才为根本，以改革开放为动力，为实现中国梦作出新贡献。"},
	], [
		{ parent:"2", index: "0", text: "同济大学", x: "121.513", y: "31.288", s5: "5", s4:"5", s3:"5", s2:"0", s1:"0", s0:"0", ssum:"15", score:"4.0", collection:"9000", track:"99", wishlist:"1", brief:"同济大学（Tongji University），简称同济，是中华人民共和国教育部直属，由教育部和上海市“共建”的全国重点大学，是历史悠久、享有盛誉的中国著名高等学府，是国家“211工程”、“985工程”重点建设高校，也是收生标准最严格的中国大学之一", detail:"同济大学的前身是1907年德国医生埃里希·宝隆在上海创办的德文医学堂；翌年改名同济德文医学堂；1912年与创办不久的同济德文工学堂合并，更名为同济德文医工学堂；1923年正式定名为大学；1927年成为国立同济大学，是中国最早的七所国立大学之一。同济大学始终把培养拔尖创新人才作为崇高使命和责任，造就了一大批杰出的政治家、科学家、教育家、社会活动家、企业家、医学专家和工程技术专家，校友中当选中国科学院、中国工程院两院院士的有140余人。截至2014年12月，同济大学设有36个学院（系）和二级办学机构，7家附属医院，4所附属中学；学校有全日制本科生18005人、硕士研究生13644人、博士研究生4504人，另有攻读学位外国留学生2477人；学校占地面积2567863平方米；图书437.1万册。"},
	], [
		{ parent:"3", index: "0", text: "我是名字超他妈长的景点4啊哈哈哈哈你说我屌不屌啊", x: "121.6007", y: "31.197", s5: "77", s4:"119", s3:"584", s2:"1930", s1:"3964", s0:"0", ssum:"6674", score:"1.6", collection:"0", track:"0", wishlist:"99999", brief:"很明显这个地方是我瞎扯淡", detail:"很明显这个地方是我瞎扯淡"}
	]];*/
var gTypeList = [
	{name: "热门景点", index: "0", checked: "false"},
	{name: "普通景点", index: "1", checked: "false"},
    {name: "没人去的景点", index: "2", checked: "false"}
];

angular.module('app.main-controller', [])

  	.controller('mainCtrl', function($scope, $ionicSideMenuDelegate, $ionicTabsDelegate, $ionicPopover, $ionicPopup, $http) {
    //$ionicSideMenuDelegate.canDragContent(false);
    //$scope.template = '<ion-popover-view style="opacity:0.8"><ion-header-bar> <h1 class="title"></h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
    //  $http.get("http://localhost:8080/CSServer/GetSceneryListWithInfo"
    //  ).success(function(sceneryList){
    //    console.log(sceneryList);
    //    console.log(sceneryList[0].scenery.name);
    //    console.log(sceneryList[0].scores[2]);
    //  }).error(function(){
    //    alert("http error");
    //  });

    $scope.transformData = function(gItemList){
        $scope.itemList = new Array();
        for(var i = 0; i < gTypeList.length; i++){
            $scope.itemList[i] = new Array();
            console.log($scope.itemList[i].length);
        }
        for(var i = 0; i < gItemList.length; i++){
            var j = gItemList[i].scenery.type;
            var index = $scope.itemList[j].length;
            var ssum = gItemList[i].scores[4]+gItemList[i].scores[3]+gItemList[i].scores[2]+gItemList[i].scores[1]+gItemList[i].scores[0];
            var score = (gItemList[i].scores[4]*5+gItemList[i].scores[3]*4+gItemList[i].scores[2]*3+gItemList[i].scores[1]*2+gItemList[i].scores[0])/ssum;
            var obj = {
                id:gItemList[i].scenery.id,
                parent:j,
                index:index,
                text:gItemList[i].scenery.name,
                x:gItemList[i].scenery.positionLatitude,
                y:gItemList[i].scenery.positionLongitude,
                s5:gItemList[i].scores[4],
                s4:gItemList[i].scores[3],
                s3:gItemList[i].scores[2],
                s2:gItemList[i].scores[1],
                s1:gItemList[i].scores[0],
                ssum:ssum,
                score:score,
                collection:gItemList[i].collection,
                track:gItemList[i].track,
                wishlist:gItemList[i].wishlist,
                brief:gItemList[i].scenery.brief,
                detail:gItemList[i].scenery.detail
            }
            $scope.itemList[j].push(obj);
            
        }
        
    }

    
    $scope.typeList = gTypeList;
    $scope.transformData(gItemList);
    console.log($scope.itemList);
	//console.log('mainCtrl')
    //悬浮框
  	$scope.openPopover = function() {
    	$scope.popover = $ionicPopover.fromTemplate($scope.template, {
    	scope: $scope
  	});
    	$scope.popover.show();
  	};
  	$scope.closePopover = function() {
    	$scope.popover.hide();
  	};
  	//Cleanup the popover when we're done with it!
  	$scope.$on('$destroy', function() {
    	$scope.popover.remove();
  	});
  	// Execute action on hide popover
  	$scope.$on('popover.hidden', function() {
    	// Execute action
  	});
  	// Execute action on remove popover
  	$scope.$on('popover.removed', function() {
    	// Execute action
  	});
    $scope.map = null;

    $scope.expandOrNot = "展开";

    //侧边栏
    $scope.leftSide = function() {

    	$ionicSideMenuDelegate.toggleLeft(true);
    	if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}
    	$scope.getItemList(0);
    	window.location.href = "#/main/mainlist";
    };
    //下方标签选择，index表示第几个标签
    $scope.itemClick = function(index) {
            if(marker!=null){marker.hide();}
            for(var i = 0; i < markerNearbyList.length; i++){
                markerNearbyList[i].hide();
            }
    		var div1 = document.getElementById('info-frame');
    		if(clickedTab == index){
    			div1.style.height = "0";
    			clickedTab = -1;
    		}
    		else{

    			clickedTab = index;
    			switch (index){
    				case 0:
    					$scope.getItemList(0);
    					window.location.href = "#/main/list";
    					div1.style.height = "100%";
    					break;
    				case 1:
    					//var map = new BMap.Map('baidu-map-api');
                        $scope.filterClose();
                        if($scope.map==null){
                            $scope.map = new BMap.Map('baidu-map-api', {enableMapClick:false});
                            $scope.map.enableScrollWheelZoom(true);

                        }
    					var geolocation = new BMap.Geolocation();  //实例化浏览器定位对象。
						geolocation.getCurrentPosition(function(r){   //定位结果对象会传递给r变量
							if(this.getStatus() == BMAP_STATUS_SUCCESS){
								if(marker!=null){marker.hide();}

                                var icons = "./img/icon-location.png";
                                var myicon = new BMap.Icon(icons, new BMap.Size(20, 20));
                                marker = new BMap.Marker(r.point, {icon: myicon});
                                $scope.nearbyList = $scope.getNearbyList(r.point.lng, r.point.lat);
								$scope.map.addOverlay(marker);
								$scope.map.centerAndZoom(r.point, 14);
								//$scope.initMap($scope.map);
							}
    						else {
								alert('failed'+this.getStatus());
    						}
						});
    					window.location.href = "#/main/nearby";
                        $scope.getItemList(0);

    					div1.style.height = "40%";
    					break;
    				case 2:
    					window.location.href = "#/main/history";
    					div1.style.height = "100%";
    					break;
    				case 4:
    					window.location.href = "#/main/account-login";
    					div1.style.height = "100%";
    					break;
    				default:
    					div1.style.height = "50%";
    					break;
    			}
    		}



    	//第index个tab被选中
    	$ionicTabsDelegate.select(index);


    };
    //右上角关闭按钮
    $scope.closeItemList = function(){
    	if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}else{
            for(var i = 0; i < markerNearbyList.length; i++){
                markerNearbyList[i].hide();
            }
    		var div1 = document.getElementById('info-frame');
    		div1.style.height = "0";
    		clickedTab = -1;
    	}
    }
    //图层按钮点击展开候选图层列表
    $scope.filterExpand = function(){
    	var div1 = document.getElementById('filter-frame');

		div1.style.height= "200px";
        for(var i = 0; i < markerNearbyList.length; i++){
            markerNearbyList[i].hide();
        }
    }
    //具体项目展开和收起
    $scope.itemExpand = function(){
    	var div1 = document.getElementById('info-frame');
    	if(itemExpanded == 0){
    		div1.style.height= "100%";
    		itemExpanded = 1;
    		$scope.expandOrNot = "收起";
    	}
    	else{
    		div1.style.height= "55%";
    		itemExpanded = 0;
    		$scope.expandOrNot = "展开";
    	}

    }
    //从具体项目返回项目列表
    $scope.itemReturn = function(){
    	$scope.getItemList(0);
        if(marker!=null){marker.hide();}
    	clickedTab = 0;
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/list";
    	div1.style.height = "100%";
    	$ionicTabsDelegate.select(0);
    }
    //从评论界面返回具体项目
    $scope.commentReturn = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/overview";
    	div1.style.height = "55%";
    	itemExpanded = 0;
    	$scope.expandOrNot = "展开";
    }
    //打开评论界面
    $scope.openComment = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/comment";
    	div1.style.height = "80%";
    	$scope.cmtScore = 0;
    }
    //打开项目详情
    $scope.openDetail = function(){
    	var div1 = document.getElementById('info-frame');
    	window.location.href = "#/main/detail";
    	div1.style.height = "100%";
    }
    //点击关闭收起图层候选列表
    $scope.filterClose = function(){
    	var div1 = document.getElementById('filter-frame');


		div1.style.height= "0";
        for(var j = 0; j < $scope.typeList.length; j++){
            type = $scope.typeList[j];
            var i = 0;
            console.log(type);
            while($scope.itemList[type.index][i]!=null){
                if(type.checked){

                    if(markerListExist[type.index]==1){
                        markerList[type.index][i].hide();
                    }

                }
                i++;

            }
            type.checked = false;
        }
    }

    //获取附近x(10)公里内项目列表
    $scope.getNearbyList = function(x, y){

        var k = 0;
        var pointA = new BMap.Point(x, y);
        $scope.nearbyList = new Array();
        var pointB = null;
        for(var i = 0; i < $scope.itemList.length; i++){
            for(var j = 0; j < $scope.itemList[i].length; j++){
                pointB = new BMap.Point($scope.itemList[i][j].x,$scope.itemList[i][j].y);
                if($scope.map.getDistance(pointA,pointB).toFixed(2)<10000){
                    $scope.nearbyList[k] = $scope.itemList[i][j];
                    markerNearbyList[k] = new BMap.Marker(pointB);
                    $scope.map.addOverlay(markerNearbyList[k]);
                    $scope.addClickHandler(i,j,markerNearbyList[k]);
                    markerNearbyList[k].show();
                    k++;
                }
            }
        }

        $scope.getOrderedNearbyList(0);

    }

    //获取附近列表
    $scope.getOrderedNearbyList = function(orderState){
        if($scope.orderedNearbyList==null)
        $scope.orderedNearbyList = $scope.nearbyList;

        switch(orderState){
                case 1://评分排序

                    $scope.orderedNearbyList = $scope.orderedNearbyList.sort(function(a,b){
                        return b.score-a.score;
                    });
                    break;
                case 2://收藏排序

                    $scope.orderedNearbyList = $scope.orderedNearbyList.sort(function(a,b){
                        return b.collection-a.collection;
                    });
                    break;
                case 3://足迹排序

                    $scope.orderedNearbyList = $scope.orderedNearbyList.sort(function(a,b){
                        return b.track-a.track;
                    });
                    break;
                case 4://心愿排序

                    $scope.orderedNearbyList = $scope.orderedNearbyList.sort(function(a,b){
                        return b.wishlist-a.wishlist;
                    });
                    break;
        }
        window.location.href = "#";
        $ionicTabsDelegate.select(1);
    }

    //获取项目列表，orderState表示排序方式，0为默认
    $scope.getItemList = function(orderState){
    	$scope.orderedItemList = new Array();
    	var i = 0;

    	while($scope.itemList[i]!=null){

    		$scope.orderedItemList[i] = $scope.itemList[i];

    		switch(orderState){
    			case 1://评分排序

    				$scope.orderedItemList[i] = $scope.orderedItemList[i].sort(function(a,b){
    					return b.score-a.score;
    				});
    				break;
    			case 2://收藏排序

    				$scope.orderedItemList[i] = $scope.orderedItemList[i].sort(function(a,b){
    					return b.collection-a.collection;
    				});
    				break;
    			case 3://足迹排序

    				$scope.orderedItemList[i] = $scope.orderedItemList[i].sort(function(a,b){
    					return b.track-a.track;
    				});
    				break;
    			case 4://心愿排序

    				$scope.orderedItemList[i] = $scope.orderedItemList[i].sort(function(a,b){
    					return b.wishlist-a.wishlist;
    				});
    				break;
    		}

    		i++;
    	}

    }



    //显示项目并在地图上显示标记，item为一个项目的对象
	$scope.showItem = function(item){
		//var map = new BMap.Map('baidu-map-api');
		if($scope.map==null){
			$scope.map = new BMap.Map('baidu-map-api', {enableMapClick:false});
			$scope.map.enableScrollWheelZoom(true);

		}
<<<<<<< Updated upstream
=======
        for(var i = 0; i < markerNearbyList.length; i++){
            markerNearbyList[i].hide();
        }
>>>>>>> Stashed changes
		var point = new BMap.Point(item.x, item.y);
		$scope.map.centerAndZoom(point, 15);

		if(marker!=null){marker.hide();}
		marker = new BMap.Marker(point);
		$scope.addClickHandler(item.parent, item.index, marker)
		$scope.map.addOverlay(marker);
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
		$scope.expandOrNot = "展开";
		if ($ionicSideMenuDelegate.isOpen()) {
    		$ionicSideMenuDelegate.toggleLeft();
    	}
    	$ionicTabsDelegate.select(0);

	}
	//在地图上显示一个类别所有项目的标记，type为类型
	$scope.showMarkers = function(type){
		var i = 0;

		if($scope.map==null){
			$scope.map = new BMap.Map('baidu-map-api', {enableMapClick:false});
			point = new BMap.Point(121.5, 31.3);
			$scope.map.centerAndZoom(point, 12);
			$scope.map.enableScrollWheelZoom(true);

		}
		if(markerListExist[type.index]!=1){
			markerList[type.index] = new Array();

		}

		while($scope.itemList[type.index][i]!=null){
			if(markerListExist[type.index]!=1){
				var item = $scope.itemList[type.index][i];
				point = new BMap.Point(item.x, item.y);
				markerList[type.index][i] = new BMap.Marker(point);
				$scope.map.addOverlay(markerList[type.index][i]);
				$scope.addClickHandler(type.index,i,markerList[type.index][i]);

			}

			if(type.checked){

				markerList[type.index][i].show();
			}
			else{
				markerList[type.index][i].hide();
			}
			i++;
		}

		markerListExist[type.index]=1;
	}

	//为地图上每个标记添加监听器，点击显示浮动框
	$scope.addClickHandler = function(index, i, tmpMarker){
		console.log(index+" "+i);

		tmpMarker.addEventListener("click",function(){
			console.log(index+" "+i);
			$scope.template = '<ion-popover-view style="opacity:0.8"><ion-header-bar> <h1 class="title">'+
				$scope.itemList[index][i].text+'</h1> </ion-header-bar> <ion-content><p>'+
				$scope.itemList[index][i].brief+'</p><div style="text-align:center;"><button class="button" ng-click="showMore('+index+','+i+')">查看详情</button></div></ion-content></ion-popover-view>';

			$scope.openPopover();


		});
	}
	//浮动框中点"显示详情"进入项目
	$scope.showMore = function(index, i){
		$scope.closePopover();
		$scope.showItem($scope.itemList[index][i]);
	}

    //下面三个方法用于评分时显示五颗星星，悬浮时点亮相应颗数，离开时显示已选评分颗数
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

    //搜索景点
    $scope.searchItem = function(itemStr){
        var t = false;

        for(var i = 0; i < $scope.itemList.length; i++){
            for(var j = 0; j < $scope.itemList[i].length; j++){
                if(itemStr == $scope.itemList[i][j].text){
                    $scope.showItem($scope.itemList[i][j]);

                    t = true;
                    break;
                }

            }
        }
        if(!t){
            $scope.showAlert(itemStr);
        }
    }

    // 一个提示对话框
    $scope.showAlert = function(itemStr) {
        var alertPopup = $ionicPopup.alert({
            title: '抱歉',
            template: '找不到“'+itemStr+'”'
        });

    }
      //搜索历史景观
      $scope.historyList = [{name:"景点1"},{name:"景点2"}];

  });





