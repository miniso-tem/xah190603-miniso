// 判断是添加还是删除
let flag;
// 点击修改按钮时当前 tr 在 table 中所在的 index 值
let upIndex;
// 点击修改按钮时所属的信息的 id 值
let goodid;
// 获取所有的点击按钮
let btns = document.querySelectorAll('.btns');
// 获取所有的选项卡
var cards = document.querySelectorAll('.card');
// 上一个被选中的按钮的下标
var prevBtnIndex = 0;
// 全局变量 trc
let r1;

// 为菜单列表按钮绑定点击事件
function menuChange(){
	for(var i = 0; i < btns.length; i++){
	      btns[i].onclick = function(){
	          // 获取当前按钮在 btns列表的下标
	          var index = this.getAttribute('data-id');
	          // 让上一个被选中的按钮恢复默认样式 
	          btns[prevBtnIndex].className = 'btn';
	          // 改变当前的样式
	          btns[index].className = 'btn active-btn';
	          // 让上一个 card 隐藏，让当前 card 显示
	          var prevClass = cards[prevBtnIndex].className.slice(0, -12);
	          cards[prevBtnIndex].className = prevClass;
	          // card
	          cards[index].className += ' active-card';
	          prevBtnIndex = index;
	      };
	}
}
menuChange();

// 为订单管理的修改按钮绑定点击事件
function orderView(btn) {
	// 遮罩层和弹框出现
	$('.m-mask').fadeIn();
	$('.m-list-modal').fadeIn();
}
	
// 为修改弹框的取消按钮绑定点击事件
$('.exit').click(function() {
	// 弹框和遮罩层消失
	$('.m-mask').fadeOut();
	$('.m-list-modal').fadeOut();
});

// 绑定图片消失的点击事件
function deleteImg(btn) {
	let deleteLi = $(btn).parent();
	// 删除图片和 x 按钮所在的父级
	deleteLi.remove();
}

// 绑定存放图片的盒子出现的点击事件
function appearBox(btn) {
	// 先找到点击文件所在的父级文件
	let appearGoodsBox = $(btn).parent();
	// 再找到该	父级文件下的对应的标签
	let appearChild = appearGoodsBox.children('div:nth-child(5)');
	// 让框框出现
	appearChild.fadeIn();
}

function goodsTable() {
	let goodsT = $(`
		<div class="goods-add">添加商品</div>
		<table class="goods" style="overflow-x: scroll;">
						<tr style="background: ghostwhite;">
							<th>typ1</th>
							<th>tpy2</th>
							<th>商品名称</th>
							<th>颜色</th>
							<th>大小</th>
							<th>价格</th>
							<th>介绍</th>
							<th>销量</th>
							<th>图片</th>
							<th>样式图</th>
							<th>详情图详情介绍</th>
							<th>详情页大图</th>
							<th>操作</th>
						</tr>
		</table>
	`);
	// 添加到页面
	$('.goods-table').append(goodsT);
}
goodsTable();

// 后台管理系统的登录界面
$('.sure-login').click(function() {
	const username = $('.m-username').val();
	const password = $('.m-password').val();
	
	$.ajax({
		type:"post",
		url:"../../../controller/AdministratorDao.php",
		data: {
			username, password
		},
		success(res) {
			const obj = JSON.parse(res);
			if(obj.code == 1) {
				// 登录成功
				$('.l-wrap').fadeOut();
			}else{
				// 登录失败
				$('.pswd-error').fadeIn();
			}
		}
	});
});


// 查找所有的用户信息
function selectUser() {
	$('#user').click(function() {
		$.ajax({
			type: "post",
			url: "../../../controller/UserDao.php",
			data: {
				type: 'alluser'
			},
			success(res) {
				const arr = JSON.parse(res);
				for(let item of arr) {
					let el = $(`
						<tr>
							<td>${item.username}</td>
							<td>${item.tel}</td>
							<td>${item.avator}</td>
							<td>${item.sex}</td>
							<td>${item.birth}</td>
						</tr>	
					`);
					// 添加到页面
					$('.user').append(el);
				}
			}
		});
		// 当发送了一次 ajax 之后，清空 tr
		const obj = $('.user').children().children().children('td');
		obj.remove();
	});
}
selectUser();


// 修改按钮的点击事件
function update(btn){
	
	// 获取要修改的数据的 id
	goodid = $(btn).attr('data-id');
	
	flag = 0;
	
	// 遮罩层和弹框出现
	$('.m-mask').fadeIn();
	$('.m-goods-modal').fadeIn();
	// 存放图片的盒子出现
	$('.img-box').fadeIn();
	$('.imglist-box').fadeIn();
	$('.bigimg-box').fadeIn();
	
	// 通过当前点击的修改按钮，获取它所在的 tr 在 tab 中的 index 值，如果修改成功，如果修改成功，就将刚刚修改的数据展示在对应的 tr 上
	upIndex = $(btn).parent().parent().parent().index();
	
	// 将要修改的这条信息的数据展示在弹框上
	const trc = $(btn).parent().parent().parent().children();
	$('.goods-typ1').val(trc.eq(0).text());
	$('.goods-typ2').val(trc.eq(1).text());
	$('.goods-name').val(trc.eq(2).text());
	$('.goods-color').val(trc.eq(3).text());
	$('.goods-size').val(trc.eq(4).text());
	$('.goods-price').val(trc.eq(5).text());
	$('.goods-intro').val(trc.eq(6).text());
	$('.goods-count').val(trc.eq(7).text());
	$('.up-img').attr('src', trc.eq(8).children('img').attr('src'));
	$('.goods-details').val(trc.eq(10).text());
	
	// 获取商品图片列表的路径列表
	let arr = [];
	const imgs = trc.eq(9).children().children();
	for(let i = 0; i < imgs.length; i++) {
		arr.push(imgs[i].src);
	}
	for(let item of arr) {
		// 点击弹框的确定按钮时，当前图片的路径要储存在数据库中
		let list = $(`
				<div class="li-imglist">
						<img src="${item}" class="up-imglist">
						<div class="delete-img" onclick="deleteImg(this)">x</div>
				</div>
		`);
		// 添加到页面
		$('.imglist-box').append(list);
	}
	
	// 获取详情页大图所有的图片列表
	let _arr = [];
	const imgBig = trc.eq(11).children().children();
	for(let i = 0; i < imgBig.length; i++) {
		_arr.push(imgBig[i].src);
	}
	for(let item of _arr) {
		let listBig = $(`
				<div class="li-bigimg">
						<img src="${item}" class="up-bigimg">
						<div class="delete-bigimg" onclick="deleteImg(this)">x</div>
				</div>	
		`);
		// 添加到页面
		$('.bigimg-box').append(listBig);
	}
	r1 = trc;
}

// 修改商品信息
function upProduct(type1, type2, goodname, color, size, price, intro, count, img, imglist, detail, showlist) {
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			type: 'update',
			goodid,
			type1, type2, goodname, color, size, price, intro, count, img, imglist, detail, showlist
		},
		success(res) {
			const obj = JSON.parse(res);
			if(obj.code) {
				// 遮罩层和弹框消失
//				$('.m-mask').fadeOut();
				$('.m-goods-modal').fadeOut();
				// 修改成功按钮出现
				$('.up-success').fadeIn();
				// 点击修改成功确认按钮时即时显示在页面上显示自改的内容
				$('.success-sure').click(function() {
					// 修改成功提示信息消失
					$('.m-mask').fadeOut();
					$('.up-success').fadeOut();
					$(r1[0]).text(type1);
					$(r1[1]).text(type2);
					$(r1[2]).text(goodname);
					$(r1[3]).text(color);
					$(r1[4]).text(size);
					$(r1[5]).text(price);
					$(r1[6]).text(intro);
					$(r1[7]).text(count);
					$(r1[8]).html(`<img src='${img}'>`);
					$(r1[10]).text(detail);
					
					// 将图片列表置空
					r1[9].innerHTML = '';
					
					// 创建图片列表
					let imgs = imglist.split('|');
					for(let img of imgs) {
						let ni = $(`<img src='${img}'>`);
						$(r1[9]).append(ni);
					}
					
					// 将详情页大图置空
					r1[11].innerHTML = '';
					let imgBig = showlist.split('|');
					for(let img of imgBig) {
						let _ni = $(`<img src='${img}'>`);
						$(r1[11]).append(_ni);
					}
					// input 里面的内容要置空
					$('.m-goods-modal input').val('');
					$('.up-img').attr('src', '');
					// 存在图片的图片要移出
					$('.imglist-box').children('div').remove();
					$('.bigimg-box').children('div').remove();
				});
			}
		}
	});
}

// 绑定商品添加的点击事件
$('.goods-add').click(function() {
	flag = 1;
	
	// 遮罩层和弹框出现
	$('.m-mask').fadeIn();
	$('.m-goods-modal').fadeIn();
});

// 绑定商品添加按钮的取消事件
$('.m-goods-exit').click(function() {
		// 遮罩层和弹框隐藏
		$('.m-mask').fadeOut();
		$('.m-goods-modal').fadeOut();
		
		// input 里面的内容要置空
		$('.m-goods-modal input').val('');
		$('.up-img').attr('src', '');
		
		// 存在图片的图片要移出
		$('.imglist-box').children('div').remove();
		$('.bigimg-box').children('div').remove();
		
		// 存放图片的盒子要隐藏
		$('.img-box').fadeOut();
		$('.imglist-box').fadeOut();
		$('.bigimg-box').fadeOut();
});

// 为弹框的确定按钮绑定点击事件
$('.m-goods-sure').click(function() {
	// 获取 input 框中所有的内容
	const type1 = $('.goods-typ1').val();
	const type2 = $('.goods-typ2').val();
	const goodname = $('.goods-name').val();
	const color = $('.goods-color').val();
	const size = $('.goods-size').val();
	const price = $('.goods-price').val();
	const intro = $('.goods-intro').val();
	const count = $('.goods-count').val();
	const img = $('.up-img').attr('src');
	
	// 获取详情图片中所有图片的集合
	let arr = [];
	const imgs = $('.imglist-box').children('div').children('img');
	
	$.each(imgs, function(i, item) {
		arr.push($(item).attr('src'));
	});
	
	// 转化成字符串
	let imglist = arr.join('|');
	
	const detail = $('.goods-details').val();
	
	// 获取详情页大图所有图片的集合
	let _arr = [];
	const imgBig = $('.bigimg-box').children('div').children('img');
	
	$.each(imgBig, function(i, item) {
		_arr.push($(item).attr('src'));
	});
	
	// 转化为字符串
	let showlist = _arr.join('|');
	
	flag ? insertProduct(type1, type2, goodname, color, size, price, intro, count, img, imglist, detail, showlist) : upProduct(type1, type2, goodname, color, size, price, intro, count, img, imglist, detail, showlist);
});


// 商品的添加
function insertProduct(type1, type2, goodname, color, size, price, intro, count, img, imglist, detail, showlist) {
	if(type1&&type2&&goodname&&color&&size&&price&&intro&&count&&img&&imglist&&detail&& showlist){
		$.ajax({
			type: "post",
			url: "../../../controller/ProductDao.php",
			data: {
				type: 'insert',
				type1,type2,goodname,color,size,price,intro,count,img,imglist,detail,showlist
			},
			success(res) {
				const obj = JSON.parse(res);
				if(obj.code) {
					// 弹框和遮罩层消失
					$('.m-mask').fadeOut();
					$('.m-goods-modal').fadeOut();
					// 将新添加的内容即时显示在页面上
					const tr = $(`
						<tr>
							<td>${type1}</td>
							<td>${type2}</td>
							<td>${goodname}</td>
							<td>${color}</td>
							<td>${size}</td>
							<td>${price}</td>
							<td>${intro}</td>
							<td>${count}</td>
							<td>
								<img src='${img}'>
							</td>
							<td><div class='l-list'></div></td>
							<td>${detail}</td>
							<td><div class='b-list'></div></td>
							<td>
								<div class="goods-btns">
									<div class="goods-view" onclick="update(this)" data-id="${obj.id}">修改</div>
									<div class="goods-exit" onclick="del(this)" data-id="${obj.id}">删除</div>
								</div>
							</td>
						</tr>
					`);
					// 创建图片列表
					const imgs = imglist.split('|');
					for(let img of imgs) {
						let ni = $(`<img src="${img}">`);
            tr.children().children('.l-list').append(ni);
					}

					// 创建详情页大图
					const imgsBig = showlist.split('|');
					for(let img of imgsBig) {
						let _ni = $(`<img src="${img}">`);
						tr.children().children('.b-list').append(_ni);
					}
					// 添加到页面
					$('.goods').append(tr);
					
					// 添加成功之后清除 input 里面所有的内容
					$('.m-goods-modal input').val('');
					$('.up-img').attr('src', '');
					// 存在图片的图片要移出
					$('.imglist-box').children('div').remove();
					$('.bigimg-box').children('div').remove();
				}
			}
		});
	}
}


// 商品的查找
function selectProduct() {
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			type: 'select'
		},
		success(res) {
			const arr = JSON.parse(res);
			for(let item of arr) {
				let el = $(`
					<tr>
							<td>${item.type1}</td>
							<td>${item.type2}</td>
							<td>${item.goodname}</td>
							<td>${item.color}</td>
							<td>${item.size}</td>
							<td>${item.price}</td>
							<td>${item.intro}</td>
							<td>${item.count}</td>
							<td>
								<img src='${item.img}'>
							</td>
							<td><div class='l-list'></div></td>
							<td>${item.detail}</td>
							<td><div class='b-list'></div></td>
							<td>
								<div class="goods-btns">
									<div class="goods-view" onclick="update(this)" data-id="${item.ID}">修改</div>
									<div class="goods-exit" onclick="del(this)" data-id="${item.ID}">删除</div>
								</div>
							</td>
						</tr>
				`);
					// 创建图片列表
					const imgs = item.imglist.split('|');
					for(let img of imgs) {
						let ni = $(`<img src="${img}">`);
            el.children().children('.l-list').append(ni);
					}
					
					// 创建详情页大图
					const imgsBig = item.showlist.split('|');
					for(let img of imgsBig) {
						let _ni = $(`<img src="${img}">`);
						el.children().children('.b-list').append(_ni);
					}
					// 添加到页面
					$('.goods').append(el);
			}
		}
	});
}
selectProduct();

// 商品的删除
function del(btn) {
	// 获取当前要删除的这条信息的 ID
	const goodid = $(btn).attr('data-id');
	
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			goodid,
			type: 'delete'
		},
		success(res) {
			const obj = JSON.parse(res);
			if(obj.code) {
				// 删除警告弹框出现
				$('.m-mask').fadeIn();
				$('.delete-remind').fadeIn()
				// 点击删除的确认按钮
				$('.delete-sure').click(function() {
					// 弹框和遮罩层消失
					$('.m-mask').fadeOut();
					$('.delete-remind').fadeOut();
					// 将删除的这行数据从表格中删除
					$(btn).parent().parent().parent().remove();
				});
			}
		}
	});
}

// 添加和修改的上传按钮绑定点击事件
$('.up-img-btn').click(function() {
	// 获取要上传的文件信息，并做验证
	const filedata = $('.goods-img')[0].files[0];
	upFn(filedata, function(res) {
		// 将弹框中的 img 的路径设置为上传成功之后的路径
		$('.up-img').attr('src', res);
	});
});

$('.up-imglist-btn').click(function() {
	// 获取要上传的文件信息，并做验证
	const filedata = $('.goods-imglist')[0].files[0];
	upFn(filedata, function(res) {
		// 将弹框中的 img 的路径设置为上传成功之后的路径
		let li = `
				<div class="li-imglist">
						<img src="${res}" class="up-imglist">
						<div class="delete-img" onclick="deleteImg(this)">x</div>
				</div>	
		`;
		// 添加到页面
		$('.imglist-box').append(li);
	});
});

$('.up-big-btn').click(function() {
	// 获取要上传的文件信息，并做验证
	const filedata = $('.goods-big')[0].files[0];
		upFn(filedata, function(res) {
			let liBig = `
				<div class="li-bigimg">
						<img src="${res}" class="up-bigimg">
						<div class="delete-bigimg" onclick="deleteImg(this)">x</div>
				</div>
	`;
	// 添加到页面
	$('.bigimg-box').append(liBig);
	});
});

// 查找所有的地址
function addressSelect() {
	$('#address').click(function() {
		$.ajax({
			type: "post",
			url: "../../../controller/AddressDao.php",
			data: {
				type: 'checkaddress'
			},
			success(res) {
				const arr = JSON.parse(res);
				for(let item of arr) {
					let el = $(`
						<tr>
							<td>${item.userid}</td>
							<td>${item.name}</td>
							<td>${item.tel}</td>
							<td>${item.region}</td>
							<td>${item.address}</td>
							<td>${item.status}</td>
						</tr>
					`);
					// 添加到页面
					$('.address').append(el);
				}
			}
		});
		// 当发送了一次 ajax 之后，清空 tr
		const obj = $('.address').children().children().children('td');
		obj.remove();
	});
	
}
addressSelect();

// 查找所有的评价
function checkeval() {
	$('#checkeval').click(function() {
		$.ajax({
			type: "post",
			url: "../../../controller/EvaluateDao.php",
			data: {
				type: 'checkeval'
			},
			success(res) {
				const arr = JSON.parse(res);
				for(let item of arr) {
					let el = $(`
						<tr>
							<td>${item.userid}</td>
							<td>${item.goodid}</td>
							<td>${item.content}</td>
							<td>${item.date}</td>
						</tr>
					`);
					// 添加到页面
					$('.evaluation').append(el);
				}
			}
		});
		// 当发送了一次 ajax 之后，清空 tr
		const obj = $('.evaluation').children().children().children('td');
		obj.remove();
	});
}
checkeval();

// 查询所有的订单
function order() {
	$('#orderList').click(function() {
		$.ajax({
			type: "post",
			url: "../../../controller/OrderDao.php",
			data: {
				type: 'checkorder'
			},
			success(res) {
				const arr = JSON.parse(res);
				for(let item of arr) {
					const el = $(`
							<tr>
								<td>Tom</td>
								<td>男士拖鞋</td>
								<td>陕西省西安市雁塔区</td>
								<td>23453534</td>
								<td>未发货</td>
								<td>
									<div class="list-view" onclick="orderView(this)">修改</div>
								</td>
							</tr>	
					`);
					// 添加到页面
					$('.list').append(el);
				}
			}
		});
		// 当发送了一次 ajax 之后，清空 tr
		const obj = $('.list').children().children().children('td');
		obj.remove();
	});
}
order();

// 分页
$(function(){  
         var $table = $('.goods');  
         var currentPage = 0;//当前页默认值为0  
         var pageSize = 5;//每一页显示的数目  
         $table.bind('paging',function(){  
             $table.find('tbody tr').hide().slice(currentPage*pageSize,(currentPage+1)*pageSize).show();  
         });       
         var sumRows = $table.find('tbody tr').length;  
         var sumPages = Math.ceil(sumRows/pageSize);//总页数  
           
         var $pager = $('<div class="page"></div>');  //新建div，放入a标签,显示底部分页码  
         for(var pageIndex = 0 ; pageIndex<sumPages ; pageIndex++){  
             $('<a href="#" id="pageStyle" onclick="changCss(this)"><span>'+(pageIndex+1)+'</span></a>').bind("click",{"newPage":pageIndex},function(event){  
                 currentPage = event.data["newPage"];  
                 $table.trigger("paging");  
                   //触发分页函数  
                 }).appendTo($pager);  
                 $pager.append(" ");  
         }     
             $pager.insertAfter($table);  
             $table.trigger("paging");  
               
             //默认第一页的a标签效果  
             var $pagess = $('#pageStyle');  
             $pagess[0].style.backgroundColor="#006B00";  
             $pagess[0].style.color="#ffffff";  
    });     
    //a链接点击变色，再点其他回复原色  
      function changCss(obj){  
        var arr = document.getElementsByTagName("a");  
        for(var i=0;i<arr.length;i++){     
         if(obj==arr[i]){       //当前页样式  
          obj.style.backgroundColor="#006B00";  
          obj.style.color="#ffffff";  
        }  
         else  
         {  
           arr[i].style.color="";  
           arr[i].style.backgroundColor="";  
         }  
        }  
     }      