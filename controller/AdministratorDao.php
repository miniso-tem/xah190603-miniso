<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/4
 * Time: 9:23
 */
require_once '../model/AdministratorService.php';

$service = new AdministratorService();

//接收从前端传入的用户名和密码，进行判断
$username = $_POST['username'];
$password = $_POST['password'];
$service->AdminLogin($username,$password);

