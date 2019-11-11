<?php

require_once '../beans/Shopping.php';
require_once '../model/ShoppingService.php';
$service = new ShoppingService();
/*
 * 购物车主要包含的操作
 * 1、加入购物车
 * 2、查看购物车所有商品
 * 3、从购物车中删除商品
 * 4、商品下单之后从购物车中删除
 * */
//获取前端传来的type类型，将任务分发到model层
$type = $_POST['type'];
switch($type){
    //添加购物车
    case 'addcart':
        $userid = $_POST['userid'];
        $goodid = $_POST['goodid'];
        $color = $_POST['color'];
        $size = $_POST['size'];
        $count = $_POST['count'];
        $shopping = new Shopping($userid,$goodid,$color,$size,$count);
        $service->addCart($shopping);
        break;
    //查看购物车
    case 'checkcart':
        $userid = $_POST['userid'];
        $service->checkCart($userid);
        break;
        //从购物中删除商品
    case 'delcart':
        $userid = $_POST['userid'];
        $goodid = $_POST['goodid'];
        $service->delCart($userid,$goodid);
        break;
    case 'upcart':
        $service->upCart();
        break;

}





































