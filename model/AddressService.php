<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:52
 */
require_once 'DB.php';
class AddressService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //添加地址
    function insertAddress($address){
        $sql = "insert into address (userid,name,tel,region,address,status) values ('{$address->userid}','{$address->name}','{$address->tel}','{$address->region}','{$address->address}','{$address->status}')";
        $res = $this->db->query($sql);
        if($res){
            //将每一条地址的id值都返回给前端，这样前端对地址做删除和修改的时候会比较方便
            $sql_id = "select ID from address order by ID desc limit 0,1 ";
            $id_res= $this->db->mysqli->query($sql_id);
            $id = mysqli_fetch_assoc($id_res)['ID'];
            echo '{"code":"1" ,"id":" '.$id.' "}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //修改编辑地址
    function resetAddress($addressid,$address)
    {
        var_dump($addressid,$address);
        $sql = "update address set name = '{$address->name}',tel = '{$address->tel}', region = '{$address->region}', address = '{$address->address}',status = '{$address->status}' where ID = '{$addressid}'";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //用户查看所有收货地址
    function allAddress( $userid){
        $sql = "select * from address where userid = '{$userid}'";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }


    }
    //用户删除收货地址
    function delAddress($addressid){
        $sql = "delete from address where ID = '{$addressid}'";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //后台管理系统查看所有收货地址
    function checkAddress(){
        $sql = "select * from address";
        $res = $this->db->query($sql);
        for($i = 0; $i < count($res); $i++){
            $uid = $res[$i]['userid'];
            $sql1 = "select username from userlist where ID = '{$uid}'";
            $res1 = $this->db->query($sql1);
            $res[$i]['username'] = $res1[0]['username'];
        }
        echo json_encode($res);
    }

}














