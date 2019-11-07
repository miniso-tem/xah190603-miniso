<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:42
 */
class Address{
    public $userid;//用户名
    public $name;//收货人地址
    public $tel;//收货人电话号码
    public $region;//收货地区
    public $address;//详细地址
    public $status;//是否默认地址

    function __construct($userid,$name,$tel,$region,$address,$status)
    {
        $this->userid = $userid;
        $this->name = $name;
        $this->tel = $tel;
        $this->region = $region;
        $this->address = $address;
        $this->status = $status;
    }
}