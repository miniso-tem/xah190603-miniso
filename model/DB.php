<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/1
 * Time: 11:17
 */
class DB{
    private $host = "localhost";
    private $username = "fish";
    private $password = "111111";
    private $database = "190603miniso";
    //链接数据库 类似$con
    public $mysqli;

    //构造函数
    function __construct()
    {
        $this->connect();
        $this->mysqli->query("set names 'utf8'");
    }

    function connect(){
        $this->mysqli = new mysqli($this->host,$this->username,$this->password,$this->database);
        if($this->mysqli->connect_error)
        {
            die($this->mysqli->connect_error);
        }
    }
    function query($sql){
        $result = $this->mysqli->query($sql);
        //获取执行SQL语句的结果的数据类型，进行判断，根据类型返回具体的值
        //查，返回的是一个对象
        //增删改返回的是布尔类型
        $datatype = gettype($result);
        if($datatype == 'object'){
            return $result->fetch_all(MYSQLI_ASSOC);
        }else if($datatype == 'boolean'){
            return $result;
        }
    }

}
















