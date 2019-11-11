<?php
class Shopping{
    public $userid;//用户id
    public $goodid;//商品id
    public $color;//商品颜色
    public $size;//商品尺寸
    public $count;//商品数量
    function __construct($userid,$goodid,$color,$size,$count)
    {
        $this->userid = $userid;
        $this->goodid = $goodid;
        $this->color = $color;
        $this->size = $size;
        $this->count = $count;
    }
}