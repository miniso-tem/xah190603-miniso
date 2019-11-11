//手机号验证
$('.logon-tel').click(function(){
	$('.mobile').text("");
	$('.error').css('color','#999');
});

$('.logon-tel').blur(function(){
	let telnum = $('.logon-tel').val();
	let reg = /^1[0-9]{10}$/;
	if(telnum == ''){
		$('.error').css('color','red');
	}else{
		if(reg.test(telnum)){
			$('.mobile').text('');
			$('.error').text('');
			$('.error').css('color','black');
		}else{
			$('.error').text('手机号错误');
			$('.error').css('color','red');
		}
	}
});


//点击登录  发送ajax请求
$('.logon-btn').click(function(){
	const tel= $('.logon-tel').val();
	const password = $('.logon-regpwd1').val();
	
	$.ajax({
		type:'post',
		url:'../../controller/UserDao.php',	
		data:{
			type:'login',
			password,
			tel
		},
		success(res){
			console.log(res);
			const obj = JSON.parse(res);
			if(obj.code == 0){
				alert("用户名不存在");
			}else if(obj.code == 1){
				alert('登录成功');
			}else if(obj.code==2){
				alert('密码不成功');
			}else{
				alert('内部服务器错误');
			}
		},
		error(){
			console.log(请求失败);
		}
		
	});
});

layui.use('layer', function(){
  var layer = layui.layer;
  layer.msg('hello');
});              
      