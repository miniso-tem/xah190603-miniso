//头部
$('.header').append(`
		<div class="zuishangmian">
		<div class="x-header">
			<!-- 最上方黑色框登录注册一栏 -->
			<div class="headerTop">
				<div class="x-main">
					<div class="topLeft">
						<span>名创优品 - 爱生活 爱miniso</span>
					</div>

					<div class="topRight">
						<div class="login topLogin">
							<span><a href="logon.html">登录</a></span>
							<span><a href="register.html">注册</a></span>
							<ul>
								<li>
									<div></div>
									<a href="" target="_blank">订单管理</a>
								</li>
								<li>
									<div></div>
									<a href="" target="_blank">在线客服</a>
								</li>
								<li>
									<div></div>
									<a href="" target="_blank">帮助中心</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="headerBottom">
				<img src="../imgs/logo-1-2.png"/ class="scroll-logo">
				<div class="x-main x-main-x">
					<div class="rel">
						<div class="logo">
							<a href="">
								<img src="../imgs/logo.png" alt="">
							</a>
						</div>
						<!-- 搜索框 -->
						<div class="x-floor x-floor-x">
							<div class="search">
								<form action="/search-result.html" method="post" id="searchbar_331" async="false">
									<button class="searchBtn">
                                    <i class="layui-icon layui-icon-search  "></i>
                                </button>
									<input type="text" name="search_keywords" placeholder="输入关键词寻找宝贝" value="" autocomplete="off">
								</form>
							
								<div class="searchBoard">
									<div class="recommend">
										<h1 class="x-gray">大家都在搜索</h1>
										<li>
											<a href="">西餐套装</a>
										</li>
										<li>
											<a href="">小夜灯</a>
										</li>
										<li>
											<a href="">多功能便携风扇</a>
										</li>
									</div>
								</div>
							
							</div>
						</div>
						<!-- 购物车数量 -->
						<a href="">
							<div class="cart" id="topMinCart">
								<img src="../imgs/car.png" class="car" alt="">
								<div class="news">0</div>
							</div>
						</a>
					</div>
					<div class="nav nav9">
						<a href=""><div class="nav9-register">注册</div></a>
						<a href=""><div class="nav9-logon">登录</div></a>
						<div class="x-floor">

							<ul class="navLeft" id="topCatMenu">
								<li>

									<a href="../html/index.html">首页</a>

								</li>

								<li id="parent_cat_id_16">
									<a href="">居家</a>
									<div class="secMenu">
										<div class="x-main x-main-p">
											<div class="menuBox">
												<div class="imgbox">
													<img src="../imgs/1-1.png" alt="">
												</div>
												<p>拖鞋</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>清洁保鲜</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-3.png" alt="">
												</div>
												<p>家饰</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>收纳</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-5.png" alt="">
												</div>
												<p>浴室用品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>床品</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_14" class="active">
									<a href="">餐厨</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>杯壶</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>餐具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-3.png" alt="">
												</div>
												<p>功能厨具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_20">
									<a href="">服装</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-1.png" alt="">
												</div>
												<p>T恤</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>运动服饰</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-3.png" alt="">
												</div>
												<p>内衣</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-4.png" alt="">
												</div>
												<p>丝袜</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-5.png" alt="">
												</div>
												<p>袜子</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-6.png" alt="">
												</div>
												<p>内裤</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-7.png" alt="">
												</div>
												<p>配饰</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_18">
									<a href="">美护</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>美妆</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>身体护理</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-6.png" alt="">
												</div>
												<p>护肤品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-7.png" alt="">
												</div>
												<p>口腔护理</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>洗发护发</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>美护工具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_27">
									<a href="">出行</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-5.png" alt="">
												</div>
												<p>旅行用品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>箱包</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_37">
									<a href="">电器</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>生活电器</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>数码</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_46">
									<a href="">杂货</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>雨具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>零食</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>文具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>玩具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_49">
									<a href="">系列</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>粉红豹</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-3.png" alt="">
												</div>
												<p>裸熊</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-5.png" alt="">
												</div>
												<p>芝麻街</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-3.png" alt="">
												</div>
												<p>三丽鸥</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-4.png" alt="">
												</div>
												<p>潘通</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>Kakao Friends</p>
											</div>

										</div>
									</div>
								</li>
							</ul>

						</div>
						<ul class="navRight">
							<li id="topTopicMenu">
								<a href="">专题</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--定位表头-->
	<div class="fixed">
		<div class="x-header">
			<!-- 最上方黑色框登录注册一栏 -->
			<div class="headerTop">
				<div class="x-main">
					<div class="topLeft">
						<span>名创优品 - 爱生活 爱miniso</span>
					</div>

					<div class="topRight">
						<div class="login topLogin">
							<span><a href="logon.html">登录</a></span>
							<span><a href="register.html">注册</a></span>
							<ul>
								<li>
									<div></div>
									<a href="" target="_blank">订单管理</a>
								</li>
								<li>
									<div></div>
									<a href="" target="_blank">在线客服</a>
								</li>
								<li>
									<div></div>
									<a href="" target="_blank">帮助中心</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div class="headerBottom">
				<img src="../imgs/logo-1-2.png"/ class="scroll-logo">
				<div class="x-main x-main-x">
					<div class="rel">
						<div class="logo">
							<a href="">
								<img src="../imgs/logo.png" alt="">
							</a>
						</div>
						<!-- 搜索框 -->
						<div class="x-floor x-floor-x">
							<div class="search">
								<form action="/search-result.html" method="post" id="searchbar_331" async="false">
									<button class="searchBtn">
                                    <i class="layui-icon layui-icon-search  "></i>
                                </button>
									<input type="text" name="search_keywords" placeholder="输入关键词寻找宝贝" value="" autocomplete="off">
								</form>
								
								<div class="searchBoard">
									<div class="recommend">
										<h1 class="x-gray">大家都在搜索</h1>
										<li>
											<a href="">西餐套装</a>
										</li>
										<li>
											<a href="">小夜灯</a>
										</li>
										<li>
											<a href="">多功能便携风扇</a>
										</li>
									</div>
								</div>
							
							</div>
						</div>
						<!-- 购物车数量 -->
						<a href="">
							<div class="cart" id="topMinCart">
								<img src="../imgs/car.png" class="car" alt="">
								<div class="news">0</div>
							</div>
						</a>
					</div>
					<div class="nav nav9">
						<a href=""><div class="nav9-register">注册</div></a>
						<a href=""><div class="nav9-logon">登录</div></a>
						<div class="x-floor">

							<ul class="navLeft" id="topCatMenu">
								<li>

									<a href="../html/index.html">首页</a>

								</li>

								<li id="parent_cat_id_16">
									<a href="">居家</a>
									<div class="secMenu">
										<div class="x-main x-main-p">
											<div class="menuBox">
												<div class="imgbox">
													<img src="../imgs/1-1.png" alt="">
												</div>
												<p>拖鞋</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>清洁保鲜</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-3.png" alt="">
												</div>
												<p>家饰</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>收纳</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-5.png" alt="">
												</div>
												<p>浴室用品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>床品</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_14" class="active">
									<a href="">餐厨</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>杯壶</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>餐具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-3.png" alt="">
												</div>
												<p>功能厨具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_20">
									<a href="">服装</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-1.png" alt="">
												</div>
												<p>T恤</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>运动服饰</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-3.png" alt="">
												</div>
												<p>内衣</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-4.png" alt="">
												</div>
												<p>丝袜</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-5.png" alt="">
												</div>
												<p>袜子</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-6.png" alt="">
												</div>
												<p>内裤</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-7.png" alt="">
												</div>
												<p>配饰</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_18">
									<a href="">美护</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>美妆</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>身体护理</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-6.png" alt="">
												</div>
												<p>护肤品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-7.png" alt="">
												</div>
												<p>口腔护理</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>洗发护发</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>美护工具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_27">
									<a href="">出行</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-5.png" alt="">
												</div>
												<p>旅行用品</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>箱包</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_37">
									<a href="">电器</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>生活电器</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-2.png" alt="">
												</div>
												<p>数码</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_46">
									<a href="">杂货</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-2.png" alt="">
												</div>
												<p>雨具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-1.png" alt="">
												</div>
												<p>零食</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>文具</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-6.png" alt="">
												</div>
												<p>玩具</p>
											</div>

										</div>
									</div>
								</li>
								<li id="parent_cat_id_49">
									<a href="">系列</a>
									<div class="secMenu">
										<div class="x-main x-main-p">

											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-2.png" alt="">
												</div>
												<p>粉红豹</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-3.png" alt="">
												</div>
												<p>裸熊</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-5.png" alt="">
												</div>
												<p>芝麻街</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/2-3.png" alt="">
												</div>
												<p>三丽鸥</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/3-4.png" alt="">
												</div>
												<p>潘通</p>
											</div>
											<div class="menuBox" onclick="">
												<div class="imgbox">
													<img src="../imgs/1-4.png" alt="">
												</div>
												<p>Kakao Friends</p>
											</div>

										</div>
									</div>
								</li>
							</ul>

						</div>
						<ul class="navRight">
							<li id="topTopicMenu">
								<a href="">专题</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

`);


//尾部
$('.footer').append(`
		<div class="x-floor bottom">
			<div class="x-whiteBoard footerTop">
				<div class="x-main">
					<ul>
						<li>
							<h1>服务热线</h1>
							<h2>400-9965-022</h2> <span>9:00 - 21:00</span>
						</li>
						<li class="middle">
							<h1>名创优品品牌宣言</h1>
							<p> 名创优品旗下电商品牌，从名创优品2000家线下旗舰店筛选最优质的产品，秉承从选料，设计，生产，检测都严苛把控，只为把优质的商品送到你面前。 </p>
						</li>
						<li>
							<h1>扫码关注公众号&nbsp;</h1>
							<p>&nbsp;</p>

							<img src="../imgs/ma.jpg">
						</li>
					</ul>
					<ul>
					</ul>
				</div>
			</div>
			<div class="footerBottom">
				<div class="x-main">
					<div class="x-main">
						<ul class="borderB">
							<li>
								<img src="../imgs/footer1.png" alt="">
								<span>名创优品质量保障</span> </li>
							<li>
								<img src="../imgs/footer2.png" alt="">
								<span>全场满79元包邮</span> </li>
							<li>
								<img src="../imgs/footer3.png" alt="">
								<span>30天无理由退换</span> </li>
						</ul>
						<ul class="link">
							<li>
								<a href="">常见问题</a>
							</li>
							<li>
								<a href="">售后服务</a>
							</li>
							<li>
								<a href="">配送与验收</a>
							</li>
							<li>
								<a href="">联系客服</a>
							</li>
							<li>
								<a href="">隐私政策</a>
							</li>
							<li>
								<a href="">服务协议</a>
							</li>
						</ul>
						<p class="p-1">©&nbsp;2019&nbsp;MINISO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;备案号：粤ICP备15008399号-3
						</p>
						<p class="p-2">为了更好的体验，推荐您使用Chrome浏览器</p>
					</div>
				</div>
			</div>
		</div>
	
`);


// <!-- 搜素框jQ代码 -->
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

    if ($('.searchBoard .recommend').html() != '') {
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




//首页分类滚轮事件
$(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
        $('.zuishangmian').css({
            display: "block",
            position: "fixed",
            //			z-index:"600",
            width: "100%",
            padding: "0",
            top: "0"
        });
        $('.zuishangmian .headerTop').css('display', 'none');
        $('.zuishangmian .nav9>a').css('display', 'block');
        $('.zuishangmian .x-main-x').css('padding', '0');
        $('.zuishangmian .x-floor-x').css('display', 'none');
        $('.zuishangmian .logo').css('display', 'none');
        $('.zuishangmian .secMenu').css('margin-top', '-35px');
        $('.zuishangmian .nav9 li').css('padding-bottom', '15px');
        $('.zuishangmian .nav').css('padding-top', '0');
        $('.zuishangmian .scroll-logo').css('display', 'block');
    } else {
        $('.zuishangmian').css('display', 'none')
    }
})