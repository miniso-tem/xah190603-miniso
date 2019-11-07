<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:42
 */
require_once '../beans/Address.php';
require_once '../model/AddressService.php';
/*
 * 收货地址有关的所有操作
 * 1、用户添加收货地址
 * 2、用户修改收货地址
 * 3、用户删除地址
 * 3、用户查看所有收货地址
 * 4、后台管理系统收货地址查询
 * */
$type = $_POST['type'];
$service = new AddressService();

switch ($type){
    //添加地址
    case 'insertaddress':
        $userid = $_POST['userid'];
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $region = $_POST['region'];
        $address = $_POST['address'];
        $status = $_POST['status'];
        $address = new Address($userid,$name,$tel,$region,$address,$status);
        $service->insertAddress($address);
        break;
    //修改地址
    case 'resetaddress':
        $addressid = $_POST['addressid'];
        $userid = $_POST['userid'];
        $name = $_POST['name'];
        $tel = $_POST['tel'];
        $region = $_POST['region'];
        $address = $_POST['address'];
        $status = $_POST['status'];
        $address = new Address($userid,$name,$tel,$region,$address,$status);
        $service->resetAddress($addressid,$address);
        break;
     //用户查看所有地址
    case 'alladdress':
        $userid = $_POST['userid'];
        $service->allAddress( $userid);
        //用户删除地址
    case 'deladdress':
        $addressid = $_POST['addressid'];
        $service->delAddress($addressid);
    //后台管理员查看所有收货地址
    case 'checkaddress':
        $service->checkAddress();
        break;

}




























