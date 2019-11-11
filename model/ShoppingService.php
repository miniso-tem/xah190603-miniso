<?php
require_once 'DB.php';
class ShoppingService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //添加购物车
    function addCart($shopping){
        $sql = "insert into shoppingcart (userid,goodid,color,size,count) values ('{$shopping->userid}','{$shopping->goodid}','{$shopping->color}','{$shopping->size}','{$shopping->count}')";
        $res = $this->db->query($sql);
        if($res){
            $sql_id = "select ID from shoppingcart order by ID desc limit 1";
            $res_id = $this->db->mysqli->query($sql_id);
            $id = mysqli_fetch_assoc($res_id)['ID'];
            echo '{"code":"1","id":" '.$id.' "}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //查看购物车商品
    function checkCart($userid){
        $sql = "select from shoppingcard where userid = '{$userid}'";
        $res =  $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //删除购物车商品
    function delCart($userid,$goodid){
        $sql = "delete from shoppingcart where userid = '{$userid}' and goodid = '{$goodid}'";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //下单之后从购物车中删除已下单的商品
    function upCart(){}
}
