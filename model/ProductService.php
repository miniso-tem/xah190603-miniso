<?php
require_once 'DB.php';
class ProductService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //后台管理系统添加商品
    function insertProduct($good){
        $sql = "insert into goodlist (typ1,type2,goodname,color,size,price,intro,count,img,imglist,detail,showlist,createtime) values ('{$good->type1}','{$good->type2}','{$good->goodname}','{$good->color}','{$good->size}','{$good->price}','{$good->intro}','{$good->count}','{$good->img}','{$good->imglist}'，'{$good->detail}','{$good->showlist}','{$good->createtime}')";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //后台管理系统查询商品
    function selectProduct(){
        $sql = "select * from goodlist";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //后台管理系统修改商品
    function updateProduct($goodid,$good){
        $sql = "update goodlist set tyep1 = '{$good->type1}',type2 = '{$good->type2}',goodname = '{$good->goodname}',color = '{$good->color}',size = '{$good->size}',price = '{$good->price}',intro = '{$good->intro}',count = '{$good->count}',img = '{$good->img}',goodlist = '{$good->goodlist}',detail = '{$good->detail}',showlist = '{$good->showlist}',createtime = '{$good->createtime}' where ID = $goodid";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }

    }
    //后台管理系统删除商品
    function deleteProduct($goodid){
        $sql = "delete from googlist where ID = $goodid";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面新品首发
    function newProduct(){
        //按照商品创建时间降序排序，取前12个商品组成轮播图
        $sql = "select * from goodlist order by createtime desc limit 12";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面更多新品首发
    function newmoreProduct(){
        //按照商品上传时间降序排序，查询所有的商品
        $sql = "select * from goodlist order by createtime desc";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面人气商品
    function hotProduct(){
        //人气商品按照销量降序的方式排序，取前6个商品展示在页面上
        $sql = "select * from goodlist order by count desc limit 6";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面更多人气商品
    function hotmoreProduct(){
        $sql = "select * from goodlist order by count desc";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面商品展示
    function checkProduct($type1,$type2){
        $sql = "select * from goodlist where type1 = '{$type1}',type2 = '{$type2}' limit 4";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端页面更多商品展示
    function checkmoreProduct($type1,$type2){
        $sql = "select * from goodlist where type1 = '{$type1}',type2 = '{$type2}'";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
    //前端点击一个商品跳转页面至详情页
    function dataPage($goodid){
        $sql = "select from goodlist where ID = $goodid";
        $res = $this->db->query($sql);
        if($res){
            echo json_encode($res);
        }else{
            echo '{"code":"0"}';
        }
    }
}
















