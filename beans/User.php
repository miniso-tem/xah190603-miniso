<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/5
 * Time: 19:41
 */
//创建一个关于用户所有信息的类
class User{
    public $username;
    public $password;
    public $tel;
    public $avator;
    public $sex;
    public $birth;

    //构造函数
    function __construct($username,$password,$tel,$avator,$sex,$birth)
    {
        $this->username = $username;
        $this->password = $password;
        $this->tel = $tel;
        $this->avator = $avator;
        $this->sex  = $sex;
        $this->birth = $birth;
    }
}