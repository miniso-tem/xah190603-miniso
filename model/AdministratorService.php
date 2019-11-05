<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/4
 * Time: 9:34
 */
require_once 'DB.php';
class AdministratorService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    function AdminLogin($username,$password){
        $sql = "select password from administrator where username = '{$username}'";
        $res = $this->db->query($sql);
        if($res->num_rows==0){
            //用户名不存在
            echo '{"code":"0"}';
        }else if($res->num_rows > 0){
            $obj = mysqli_fetch_assoc($res);
            $pswd = $obj['password'];
            if($pswd == $password){
                //用户登录成功
                echo '{"code":"1"}';
            }else{
                //用户输入密码错误
                echo '{"code":"2"}';
            };
        }else{
            //服务器错误
            echo '{"code":"3"}';
        }
    }
}