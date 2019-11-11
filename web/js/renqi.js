//$(function(){
//	$.ajax({
//		type:'post',
//		url:'../../controller/ProductDao.php',
//		data:{
//			type:'hot'
//		},
//		success(res){
//			const obj = JSON.parse();
//			for(let item of obj){
//				const el = $(`
//					<div class="item">
//						<a class="imgbox" href="/product-5467.html">
//							<img class="lazy-load img_lazyloaded" data-original="http://s2.hgcang.com/bsimg/ec/public/images/ad/52/ad528ca424b0c04036b738a33159b3b0.png" alt="樱桃小丸子摆件盲盒" src="http://s2.hgcang.com/bsimg/ec/public/images/ad/52/ad528ca424b0c04036b738a33159b3b0.png" style="display: inline;">
//						</a>
//						<div class="tagBox">
//						</div>
//						<a class="title" href="javascript:;">樱桃小丸子摆件盲盒</a>
//						<span class="">¥19.9</span>
//						<br>
//						<br>
//						<p class="desc">
//							造型可爱，风格清新 </p>
//					</div>
//				`);
//				$('.itemList').append(el);
//			}
//		}
//	});
//})
