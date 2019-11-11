(function () {
    var _page_uri = location.pathname;
    var _loop_menu = 0;
    _page_uri = _page_uri.replace(/^\/index.php/, '');
    $('.nav a').each(function (e) {
        var _menu_url = $(this).attr('href');
        _menu_url = _menu_url.replace(/^\/index.php/, '');
        if (_menu_url == _page_uri && _loop_menu < 1) {
            _loop_menu += 1;
            $('.nav li').removeClass('active');
            $(this).parent('li').addClass('active');
        }
    });
    if (_loop_menu == 0) {
        //如果是分类页面
        if (/^\/category-channel-/.test(_page_uri)) {
            var parent_cat_id = _page_uri.replace(/^(\/category-channel)-(\d+)-(\d+)/, "$2");
            parent_cat_id = parent_cat_id.replace('.html', '');
            parent_cat_id = '#parent_cat_id_' + parent_cat_id;
            $('.nav li').removeClass('active');
            $(parent_cat_id).addClass('active');
        }
        //如果是专题页面
        if (/^\/topic/.test(_page_uri)) {
            $('.nav li').removeClass('active');
            $('#topTopicMenu').addClass('active');
        }
    }
})();
$(function () {
var aLi = $('.navLeft').find('li').not('.disable');
aLi.click(function () {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
})
})


<!-- 搜素框jQ代码 -->
$(function() {
var $inp = $('.search').find('input');										
var $board = $('.searchBoard');
$inp.focus(function() {
	$board.removeClass('x-hide');
})
$board.mouseout(function() {
	$board.addClass('x-hide');
})
$board.mouseover(function() {
$board.removeClass('x-hide');
})
})

function clickHistoryWord(words) {
	$('#searchbar_331').find('input[name="search_keywords"]').val(words);
	$('#searchbar_331').submit();
}

$('#ms-jsCloseHistory').on('click', function(e) {

	if($('.searchBoard .recommend').html() != '') {
		$('.searchBoard').find('.recent').remove();
		$('#ms-jsCloseHistory').remove();
	} else {
		$('.searchBoard').remove();
	}

	$.ajax({
		url: '/search-clear_history_search.html',
		success: function() {

		}
	});
})
//搜索框
	$('#searchbar_' + '331').on('submit', function() {
										var keywords = $("input[name='search_keywords']").val();
										if(keywords == '') {
											Modal.alert({
												content: "关键词不能为空",
												title: '标题'
											});
											return false;
										}
									})
//轮播图
// 切换内容
$(".tab li").mouseover(function() {
	var index = $(this).index();
	$('.tal-con div').hide();
	$('.tal-con div:eq(' + index + ')').show();
});
// 切换展示图片
$('.btn1').click(function() {
	let l = $('.now-show').position().left;
	if(l < -900) {
		$('.now-show').css('left','0px');
	}else if(l < -1970){
		$('.now-show').css('left', '-1000px');
	}else {
		$('.now-show').css('left', '0px');
	}
})
$('.btn2').click(function() {
	let r = $('.now-show').position().left;
	if(r > -20) {
		$('.now-show').css('left', '-980px');
	}else if(r>-990) {
		$('.now-show').css('left', '-1980px');
	}else{
		$('.now-show').css('left', '0px');
	}
});


	
	
//首页分类滚轮事件
$(window).scroll(function(){
	if($(this).scrollTop() >250){
		$('.zuishangmian').css({
			display:"block",
			position:"fixed",
//			z-index:"600",
			width:"100%",
			padding:"0",
			top:"0"
		});
		$('.zuishangmian .headerTop').css('display','none');
		$('.zuishangmian .nav9>a').css('display','block');
		$('.zuishangmian .x-main-x').css('padding','0');
		$('.zuishangmian .x-floor-x').css('display','none');
		$('.zuishangmian .logo').css('display','none');
		$('.zuishangmian .secMenu').css('margin-top','-35px');
		$('.zuishangmian .nav9 li').css('padding-bottom','15px');
		$('.zuishangmian .nav').css('padding-top','0');
		$('.zuishangmian .scroll-logo').css('display','block');
	}else{
		$('.zuishangmian').css('display','none')
	}
})
		
		
//		$('.headerBottom').css({
//			position:"none",
//			width:"100%",
//			padding:"0",
//			top:"0"
//		});
////		$('.nav9>a').css('display','block');
////
////		$('.x-floor-x').css('display','block');
////		$('.logo').css('display','none');
////
////		$('.scroll-logo').css('display','none');
////		$('.x-main-x').css('padding','0');
////		$('.x-floor-x').css('display',block');
////		$('.logo').css('display','block');




//轮播图
var res1 = 12;
for(let i = 0; i < res1; i++){
	$('.now-show').append(`
		<div>
			<img src="../imgs/tuoxie.png" />
			<span>樱桃小丸子摆件</span>
			<p>¥260.0</p>
		</div>	
	`);
}


//商品列表弹性盒子
var res = 4;
for(let i = 0;i < res; i++){
	$('.jujiaList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.canchuList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.fuzhuangList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.meihuList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.chuxingList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.dianqiList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.zahuoList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}

for(let i = 0;i < res; i++){
	$('.xilieList').append(`
		<div>
				<a href=""><img src="../imgs/tuoxie.png"/></a>
				<p>北欧风防臭虫香氛包</p>
				<span>¥9.9</span>
		</div>
	`);
}


//轮播图
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'new'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div><img src="${item.img}" alt="" />
//						<span>${item.intro}</span>
//						<p>${item.price}</p>
//					</div>	
//				`);
//				$('.now-show').append(el);
//			}
//		}
//	});
//})


////列表弹性盒子发送ajax请求
//居家
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'1'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.jujiaList').append(el);
//			}
//		}
//	});
//})
//
////餐厨
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'2'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.canchuList').append(el);
//			}
//		}
//	});
//})
//
////服装
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'3'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.fuzhuangList').append(el);
//			}
//		}
//	});
//})
//
////美护
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'4'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.meihuList').append(el);
//			}
//		}
//	});
//})
//
////出行
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'5'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.chuxingList').append(el);
//			}
//		}
//	});
//})
//
////电器
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'6'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.dianqiListt').append(el);
//			}
//		}
//	});
//})
//
////杂货
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'7'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.zahuoList').append(el);
//			}
//		}
//	});
//})
////系列
//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'8'
//		},
//		success(res){
//			const obj = JSON.parse(res);
//			for(let item of obj){
//				const el = $(`
//					<div>
//						<a href=""><img src="${item.img}/></a>
//						<p>${item.intro}</p>
//						<span>${item.price}</span>
//					</div>
//				`);
//				$('.xilieList').append(el);
//			}
//		}
//	});
//})
//
//
//
//
//
