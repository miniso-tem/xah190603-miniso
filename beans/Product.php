<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/1
 * Time: 11:15
 */
//创建一个包含素所有商品信息的商品类
class Good{
    public $type1;//商品大类 居家等
    public $type2;//商品小类 拖鞋等
    public $goodname;//商品名称 女士拖鞋
    public $color;//商品颜色 红色
    public $size;//商品尺寸 36
    public $price;//商品价格 100
    public $intro;//商品信息介绍
    public $count;//商品数量
    public $img;//商品图片
    public $imglist;//图片列表
    public $detail;//详情介绍
    public $showlist;//详情页图片列表
    public $createtime;//商品创建时间

    //创建构造函数
    function __construct($type1,$type2,$goodname,$color,$size,$price,$intro,$count,$img,$imglist,$detail,$showlist,$createtime)
    {
        $this->type1 = $type1;
        $this->type2 = $type2;
        $this->goodname = $goodname;
        $this->color = $color;
        $this->size = $size;
        $this->price = $price;
        $this->intro = $intro;
        $this->count = $count;
        $this->img = $img;
        $this->imglist = $imglist;
        $this->detail = $detail;
        $this->showlist = $showlist;
        $this->createtime = $createtime;
    }
}















