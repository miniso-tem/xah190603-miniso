<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/4
 * Time: 16:31
 */
//评价
class Evaluate{
   public $userid; //用户
   public $goodid; //商品
   public $content;//评价内容
   public $date;//评价时间

   function __construct($userid,$goodid,$content,$date)
   {
       $this->userid = $userid;
       $this->goodid = $goodid;
       $this->content = $content;
       $this->date = $date;
   }

}