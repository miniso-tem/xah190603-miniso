let type1,type2;

function typStyle1(el) {
	// 获取当前点击的文本内容
	type1 = $(el).attr('data-type1');
	
	let obj = $('.goods').children().children('tr');
			
	for(let i = 1; i< obj.length; i++){
		obj[i].remove();
	}
	
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			type: 'typecheck',
			type1
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
								<div class="goods-view" onclick="update(this)" data-id="${item.id}">修改</div>
								<div class="goods-exit" onclick="del(this)" data-id="${item.id}">删除</div>
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

function typStyle2(el) {
	// 获取当前点击的文本内容
	let type1 = $(el).parent().parent().parent().children('a').attr('data-type1');
	let type2 = $(el).attr('data-type2');
	
	let obj = $('.goods').children().children('tr');
			
	for(let i = 1; i< obj.length; i++){
		obj[i].remove();
	}
	
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			type: 'checkmore',
			type1,
			type2
		},
		success(res) {
			const arr = JSON.parse(res);
			console.log(arr);
			
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
								<div class="goods-view" onclick="update(this)" data-id="${item.id}">修改</div>
								<div class="goods-exit" onclick="del(this)" data-id="${item.id}">删除</div>
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


let [sum1,sum2, sum3, sum4, sum5, sum6] = [0, 0, 0, 0, 0, 0] ;
// 所有二级商品的数据统计表
function dataState() {
	$.ajax({
		type: "post",
		url: "../../../controller/ProductDao.php",
		data: {
			type1: '1',
			type: 'typecheck'
		},
		success(res) {
			const arr = JSON.parse(res);
			for(item of arr) {
				switch(item.type2) {
					case '1':
						sum1 += Number(item.count);
						break;
					case '2':
						sum2 += Number(item.count);
						break;
					case '3':
						sum3 += Number(item.count);
						break;
					case '4':
						sum4 += Number(item.count);
						break;
					case '5':
						sum5 += Number(item.count);
						break;
					case '6':
						sum6 += Number(item.count);
						break;
				}
			}
			let myChart = echarts.init(document.getElementsByClassName('main')[0]);
			let _myChart = echarts.init(document.getElementsByClassName('main-fan')[0]);
		
			let option = {
				title: {
					text: '居家商品销量条形图展示',
					 x: 'center'
				},
			    xAxis: {
			        type: 'category',
			        data: ['拖鞋', '清洁保鲜', '家饰', '收纳', '浴室用品', '床品']
			    },
			    yAxis: {
			        type: 'value'
			    },
			    series: [{
			        data: [sum1, sum2, sum3, sum4, sum5, sum6],
			        type: 'bar'
			    }]
			};
			// 添加到指定的数据表里面
			myChart.setOption(option);
			
			let _option = {
		    title : {
		        text: '居家商品销量扇形图展示',
		        x: 'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['拖鞋','清洁保鲜','家饰','收纳','浴室用品', '床品']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:[
		                {value:sum1, name:'拖鞋'},
		                {value:sum2, name:'清洁保鲜'},
		                {value:sum3, name:'家饰'},
		                {value:sum4, name:'收纳'},
		                {value:sum5, name:'浴室用品'},
		                {value:sum6, name:'床品'}
		            ],
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
			// 添加到指定的数据表里面
			_myChart.setOption(_option);
	}
});
}
dataState();