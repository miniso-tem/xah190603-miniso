<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:41
 */
require_once '../beans/Order.php';
require_once '../model/OrderService.php';

/*
 * 订单需要做的操作
 * 1、添加订单
 * 2、用户查看全部订单
 * 3、用户查看订单状态（待发货，已发货）
 * 4、用户删除订单
 * 5、后台管理系统查看所有订单
 * 6、后台管理修改订单状态
 * */

$type = $_POST['type'];
$service = new OrderService();
switch ($type){
    //添加订单
    case 'addorder':
        $userid = $_POST['userid'];
        $addressid = $_POST['addressid'];
        $goodlist = $_POST['goodlist'];
        $timeset = time();
        $status = $_POST['status'];
        $order = new Order($userid,$addressid,$goodlist,$timeset,$status);
        $service->addOrder($order);
        break;
    //用户查看所有订单
    case 'allorder':
        $userid = $_POST['userid'];
        $service->allOrder($userid);
        break;
    //用户查看不同状态下的订单
    case 'statusorder':
        $status = $_POST['status'];
        $service->statusOrder($status);
        break;
    //用户删除订单
    case 'delorder':
        $orderid = $_POST['orderid'];
        $service->delOrder($orderid);
        break;
    //后台管理系统查看所有订单信息
    case 'checkorder':
        $service->checkOrder();
        break;
    //用户修改订单状态
    case 'updateOrder':
        $orderid = $_POST['orderid'];
        $status = $_POST['status'];
        $service->updateOrder($orderid,$status);
}


























