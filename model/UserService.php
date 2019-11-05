<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/5
 * Time: 19:43
 */
require_once 'DB.php';
class UserService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //前端页面用户注册，添加用户
    function addUser($user){
        $sql = "insert into userlist (username,password,tel,avator,sex,birth) values ('{$user->username}','{$user->password}','{$user->tel}','{$user->avator}','{$user->sex}','{$user->birth}')";
        $res = $this->db->mysqli->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //用户登录
    function loginUser($username,$password){
        //根据用户名在数据库中查询，如果用户名存在，获取正确的密码
        $sql = "select password from userlist where username = '{$username}'";
        $res = $this->db->mysqli->query($sql);
        if($res->num_rows == 0){
            //用户名不存在
            echo '{"code":"0"}';
        }else if($res->num_rows > 0){
            $obj = mysqli_fetch_assoc($res);
            $pswd = $obj['password'];
            if($pswd == $password){
                //登录成功
                echo '{"code":"1"}';
            }else{
                //密码不正确
                echo '{"code":"2"}';
            }
        }else{
            //服务器错误
            echo '{"code":"3"}';
        }
    }
    //后台管理系统查看所有用户信息
    function allUser(){
        $sql = "select * from userlist";
        $res = $this->db->query($sql);
        echo json_encode($res);
    }
}