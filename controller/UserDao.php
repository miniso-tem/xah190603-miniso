<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/5
 * Time: 19:39
 */
//根据前端发送的请求，解析，将任务分配给model层
require_once '../beans/User.php';
require_once '../model/UserService.php';

//获取前端发送的type类型
$type = $_POST['type'];
$service =  new UserService();
switch ($type){
    //注册
    case 'register':
        //接收从前端发送的数据
        $username = $_POST['username'];
        $password = $_POST['password'];
        $tel = $_POST['tel'];
        //注册时用户不传头像，性别和生日的时候，是null还是undefined
        $user = new User($username,$password,$tel,null,null,null);
        //执行注册函数
        $service->addUser($user);
        break;
    //登录
    case 'login':
        //接收从前端发送的数据
        $username = $_POST['username'];
        $password = $_POST['password'];
        //执行登录函数
        $service->loginUser($username,$password);
        break;
    //后台管理系统查看所有用户信息
    case 'alluser':
        //执行查看所有用户信息的函数
        $service->allUser();
        break;
}