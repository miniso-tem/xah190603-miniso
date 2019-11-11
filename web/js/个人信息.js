let prevBtnIndex = 0;//上一个元素的下标
let btns = document.querySelectorAll('.btn');
let cards = document.querySelectorAll('.card');
let swiper = document.querySelector('.swiper');
let swiperIndex = -1;//对应当前轮播图展示的图片的顺序
let autotimer;//自动播放轮播图的计时器
//为每个选项绑定点击事件，实现选项卡功能
function menuChange(){
    for(let i = 0; i < btns.length; i++){
        btns[i].onclick = function(){
            //获取当前点击的元素的下标
            let index = this.getAttribute('data-i');
            //改变上一个点击元素的样式
            btns[prevBtnIndex].className = 'btn';
            //改变当前元素的样式
            btns[index].className = 'btn active-btn';
            //获取上一张card的下标
            let prevClass = cards[prevBtnIndex].className.slice(0,-12);
            cards[prevBtnIndex].className = prevClass;
            cards[index].className += ' active-card';
            prevBtnIndex = index;
        }
    }
}
menuChange();
//轮播图移动
//播放下一张
function nextFn(){
    swiperIndex = swiperIndex == 2? 0:++swiperIndex;
    swiper.style.left = -swiperIndex * 927.7 +'px';
}
//自动播放
function autoPlay(){
    autotimer = setInterval(function(){
        nextFn();
    },2000);
}
autoPlay();
//播放下一张
$('.nextbtn').click(function(){
    clearInterval(autotimer);
    nextFn();
    autoPlay();
});
//播放上一张
$('.prevbtn').click(function(){
    clearInterval(autotimer);
    swiperIndex--;
    if(swiperIndex <= -1) swiperIndex = 2;
    swiper.style.left = -swiperIndex * 927.7 + 'px';
    autoPlay();
});
//订单管理里面的状态切换
function checkOrder(btn){
    const status = $(btn).attr('data-i');
    const userid = 4;
    if(status == 1){
        $.ajax({
            type:'post',
            url:'../../controller/OrderDao.php',
            data:{
                type:'allorder',
                userid
            },
            success(res){
                succ(res);
            }
        });
    }else{
        $.ajax({
            type:'post',
            url:'../../controller/OrderDao.php',
            data:{
                type:'statusorder',
                status,userid
            },
            success(res){
                succ(res);
            }
        });
    }
}

function succ(res){
    const arr = JSON.parse(res);
    console.log(arr);
    $('.order-contxent').text('');
    for(let item of arr){
        console.log(1);

        let li = `
          <div class="order">
               <div class="ordertop">
                     <span class="order-date">2019-11-05</span>
                     <span class="order-time">09:33:21</span>
                     <span class="ordernum">订单号:</span>
                     <span class="orderline">1234567890</span>
                     <span>联系客服</span>
                     <span class="orderdel">删除</span>
               </div>
                     <div class="ordercont">
                            <div class="orderleft">
                                <div class="imgbox">
                                    <img src="../imgs/1573041881.jpeg" alt="">
                                </div>
                                <div class="goodinfo">持久保湿香体喷雾</div>
                            </div>
                            <div class="orderright">
                                <div class="orderstatus">
                                    <div class="status">已发货</div>
                                    <div>再次购买</div>
                                </div>
                                <div class="totolprice">￥100</div>
                                <div class="order-detail" >订单详情</div>
                            </div>
         </div>
    </div>
    
    `;
        $('.order-contxent').append(li);
    }
}












