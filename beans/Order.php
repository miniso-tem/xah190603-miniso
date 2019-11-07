<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/7
 * Time: 11:41
 */
class Order{
    public $userid;//用户id
    public $addressid;//收货地址id
    public $goodlist;//商品列表
    public $timeset;//订单创建时间
    public $status;//订单状态

    function __construct($userid,$addressid,$goodlist,$timeset,$status)
    {
        $this->userid = $userid;
        $this->addressid = $addressid;
        $this->goodlist = $goodlist;
        $this->timeset = $timeset;
        $this->status = $status;
    }


}