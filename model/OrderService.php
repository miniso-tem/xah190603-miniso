<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:41
 */
require_once 'DB.php';
class OrderService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //用户添加订单
    function addOrder($order){
        $sql = "insert into orderlist (userid,addressid,goodlist,timeset,status) values ('{$order->userid}','{$order->addressid}','{$order->goodlist}','{$order->timeset}','{$order->status}')";
        $res = $this->db->query($sql);
        if($res){
            $sql_id = "select ID from orderlist order by ID desc limit 1";
            $res_id = $this->db->mysqli->query($sql_id);
            $id = mysqli_fetch_assoc($res_id)['ID'];
            echo '{"code":"1","id"," '.$id.'"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //用户查看所有订单
    function allOrder($userid){
        $sql = "select * from orderlist where userid = '{$userid}'";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //用户查看不同状态下的订单
    function statusOrder($status){
        var_dump($status);
        $sql = "select * from orderlist where status = '{$status}'";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //用户删除订单
    function delOrder($orderid){
        $sql = "delete from orderlist where ID = '{$orderid}'";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //后台管理系统查看所有订单信息
    function checkOrder(){
            $sql = "select * from orderlist";
            $res = $this->db->query($sql);
            if($res){
                echo json_encode($res);
            }else{
                echo '{"code":"0"}';
            }
    }
    //后台管理系统修改订单状态
    function updateOrder($orderid,$status){
        $sql = "update orderlist set status = '{$status}' where ID = '{$orderid}'";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
}