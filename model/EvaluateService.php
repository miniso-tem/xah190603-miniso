<?php
require_once 'DB.php';
class EvaluateService{
    public $db;
    function __construct()
    {
        $this->db = new DB();
    }
    //前端页面添加评价的函数
    function insertEval($eval){
        $sql = "insert into evaluate (userid,goodid,content,date) values ('{$eval->userid}','{$eval->goodid}','{$eval->content}','{$eval->date}')";
        $res = $this->db->query($sql);
        if($res){
            echo '{"code":"1"}';
        }else{
            echo '{"code":"0"}';
        }
    }
    //后台管理系统查看所有评价的函数
    function checkEval(){
        $sql = "select * from evaluate";
        $res = $this->db->query($sql); //得到所有评价
        for($i = 0; $i < count($res); $i++){
            $uid = $res[$i]['userid'];//拿到一条评价里面的用户id
            $sql1 = "select username,avator from userlist where ID='{$uid}'";//在用户表里面查询这条用户信息
            $res1 = $this->db->query($sql1);//拿到该用户id对应的所有信息
            $res[$i]['username'] = $res1[0]['username'];
            $res[$i]['avator'] = $res1[0]['avator'];

//            $gid = $res[$i]['goodid'];//拿到一条评论里面的商品信息
//            $sql2 = "select detail from goodlist where ID = '{$gid}'";
//            $res2 = $this->db->query($sql2);//拿到该商品id对应的所有信息
//            $res[$i]['detail'] = $res2[0]['detail'];
        }
        echo json_encode($res);
    }
    //商品详情页显示评价的函数
    function dataEval($gid){
        $sql = "select * from evaluate where goodid = $gid";
        $res = $this->db->query($sql);
        for($i = 0; $i < count($res);$i++){
            $uid = $res[$i]['userid'];
            $sql1 = "select username,avator from userlist where ID = '{$uid}' ";
            $res1 = $this->db->query($sql1);
            $res[$i]['username'] = $res1[0]['username'];
            $res[$i]['avator'] = $res1[0]['avator'];

//            $sql2 = "select detail from goodlist where ID = $gid";
//            $res2 = $this->db->query($sql2);
//            $res[$i]['detail'] = $res2[0]['detail'];
        }
        echo json_encode($res);
    }
}




