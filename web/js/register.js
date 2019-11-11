//所有的输入框定焦点事件
$.each($('input'), function(i, item) {
        item.onfocus = function() {
            this.style.borderbottom = '1px solid #000';
        }
        
        
       
//      item.focus(function(){
//      	console.log(1);
//			$("input").css("background-color","#000");
//		});
})


//手机号码验证
$('.logon-tel').click(function(){
	$('.mobile').text("");
})
//onblur失去焦点事件
$('.logon-tel').blur(function(){
	let telnum = $('.logon-tel').val();
	let reg = /^1[0-9]{10}$/;
	if(telnum == ''){
		$('.logon-tel').css('border','1px solid #cdcdcd');
		$('.error').css('color','red');
	}else{
		if(reg.test(telnum)){
			$('.mobile').text('');
			$('.error').text('请输入手机号码');
			$('.error').css('color','#767676');
		}else{
			$('.error').text('手机号码错误');
			$('.error').css('color','red');	
		}
	}
});


//用户名输入
$('.logon-username').click(function(){
	$('.username').text("");
})
$('.logon-username').blur(function(){
	let user = $('.logon-username').val();
	let reg = /^[a-zA-Z][a-zA-Z0-9]{3,15}$/;
	if(user == ''){
		$('.logon-username').css('border','1px solid #cdcdcd');
		$('.name').css('color','red');
	}else{
		if(reg.test(user)){
			$('.logon-username').text('');
			$('.name').text('请输入用户名');
			$('.name').css('color','#767676');
		}else{
			$('.name').text('用户名错误');
			$('.name').css('color','red');
		}
	}
});


//图片验证
$('.logon-pic').click(function(){
	$('.yzm').text("");
});
//点击换一张，随机生成四个数字字母，放在前面的图形验证框中
let arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//创建随机函数
function rn(a,b){
	return Math.round(Math.random() * (b - a) + a);
}

let pictor = document.querySelector('.pictor');
function createCode(){
	pictor.innerHTML = '';	
	for(var i = 0; i< 4 ; i++){
		 let index = rn(0,arr.length - 1);
		 let x = arr[index];
		 pictor.innerHTML += x;
	}
}
pictor.onclick = function(){
	createCode();
}
//toUpperCase() 方法用于把字符串大写
//图形验证 检验logonPic输入框中输入的内容是否和图片一样
let logonPic = document.querySelector('.logon-pic');
let yzm = document.querySelector('.yzm');
	function validate(){
	data = logonPic.value.toUpperCase();
	y = pictor.innerHTML.toUpperCase();
//	console.log(data,y);
	if(data == ''){
		yzm.innerHTML = '请输入图片验证码'; 
		yzm.style.color = 'red';
	}else if(data == y){
//			console.log(5);
			yzm.innerHTML = '';
	}else{
			logonPic.style.borderBottom = '1px solid #cdcdcd';
			yzm.innerHTML = '请输入正确验证码';
			yzm.style.color = 'red';
			logonPic.value = '';
		}
	
}
//点击切换一张,就调用一次函数
logonPic.onblur = function(){
	validate();
}


//手机验证码
$('.logon-note').click(function(){
	$('.smsyzm').text("");
});
$('.logon-note').blur(function(){
	let smsy = $('.logon-note').val();
	if(smsy == ''){
		$('.smsyzm').text('验证码不能为空');
		$('.smsyzm').css('color','red');
	}else{
		$('.smsyzm').text('');
		
	}
	
});


//设置密码
let number;
$('.logon-regpwd1').click(function(){
	$('.regpwd1').text("");
});

$('.logon-regpwd1').blur(function(){
	number = $('.logon-regpwd1').val();
	let reg2 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
	if(number == ''){
		$('.logon-regpwd1').text('');
		$('.mima').text('密码不能为空');
		$('.mima').css('color','red');
	}else{
		if(reg2.test(number)){
			$('.mima').text('');	
			$('.mima').css('color','#CCCCCC');
		}else{
			$('.mima').text('密码格式错误');
			$('.mima').css('color','red');
		}
	}
});


//确认密码
let connumber;
$('.logon-regpwd2').click(function(){
	$('.regpwd2').text('');
});

$('.logon-regpwd2').blur(function(){
	connumber = $('.logon-regpwd2').val();
	if(connumber == ''){
		$('.logon-regpwd2').text('');
		$('.mima1').text('确认密码不能为空');
		$('.mima1').css('color','red');
		$('.mima1').css('margin-left','-6%');
	}else{
		if(connumber == number){
			$('.regpwd2').text('');
			$('.mima1').text('');
		}else{
			connumber = '';
			$('.regpwd2').text('');
			$('.mima1').text('两次密码不一致');
			$('.mima1').css('color','red');
		}
	}
});


//点击注册 发送ajax请求
$('.logon-btn').click(function(){
	const username = $('.logon-username').val();
	const password = $('.logon-regpwd1').val();
	const tel = $('.logon-tel').val();
	
	$.ajax({
		type: 'post',
		url: '../../controller/UserDao.php',
		data:{
			type:'register',
			username,
			password,
			tel
		},
		success(res){
			console.log(res);
			const obj = JSON.parse(res);
			if(obj.code == 0){
				alert("用户注册失败");
			}else if(obj.code == 1){
				alert('用户注册成功');
			}else{
				alert('服务器出错');
			}
		},
		error(){
			console.log('请求失败');
		}
	});
});
