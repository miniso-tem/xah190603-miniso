<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/4
 * Time: 16:34
 */
require_once '../beans/Evaluate.php';
require_once '../model/EvaluateService.php';

/* 关于商品评价的所有操作
 *  1、用户收货之后进行评价，往数据库里面添加商品评价（insertEvaluate)
 *  2、后台管理系统能够查看所有的评价 (checkEvaluate)
 *  3、在每个商品的详情页需要调取到关于本商品所有的评价(eval)
 * */
$type = $_POST['type'];
$service = new EvaluateService();

switch ($type){
    case 'inserteval':
        //接收从前端页面发送的内容
        $userid = $_POST['userid'];
        $goodid = $_POST['goodid'];
        $content = $_POST['content'];
        $date = time();
        $eval = new Evaluate($userid,$goodid,$content,$date);
        //执行添加评价函数；
        $service->insertEval($eval);
        break;
    case 'checkeval':
        //后台管理系统查看所有评价函数
        $service->checkEval();
        break;
    case 'eval':
        //接收前端页面传输的数据
        $gid = $_POST['gid'];
        //执行详情页显示评价的函数
        $service->dataEval($gid);
        break;
}