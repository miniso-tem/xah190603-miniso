<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/1
 * Time: 11:16
 */
//接收从前端发送的数据请求，对其进行解析，将任务分发到model层；
require_once '../beans/Product.php';
require_once '../model/ProductService.php';

//根据前端发送的type值的多少，将任务分发到model层；
$type = $_POST['type'];
$service = new ProduceService();

//关于商品需要做的操作 后台管理系统中的增删改查  以及在页面的具体位置进行渲染显示
switch ($type){
    //添加商品
    case 'insert':
        //接收从前端传来的数据
        $type1 = $_POST['type1'];
        $type2 = $_POST['type2'];
        $goodname = $_POST['goodname'];
        $color = $_POST['color'];
        $size = $_POST['size'];
        $price = $_POST['price'];
        $intro = $_POST['intro'];
        $count = $_POST['count'];
        $img = $_POST['img'];
        $imglist = $_POST['imglist'];
        $detail = $_POST['detail'];
        $showlist = $_POST['showlist'];
        $createtime = time();
        $good = new Good($type1,$type2,$goodname,$color,$size,$price,$intro,$count,$img,$imglist,$detail,$showlist,$createtime);
        //执行添加商品的函数
        $service->insertProduct($good);
        break;
    case 'select':
        //执行查询商品的函数
        $service->selectProduct();
        break;
    case 'update':
        //获取前端发送的数据信息
        $goodid = $_POST['goodid'];
        $type1 = $_POST['type1'];
        $type2 = $_POST['type2'];
        $goodname = $_POST['goodname'];
        $color = $_POST['color'];
        $size = $_POST['size'];
        $price = $_POST['price'];
        $intro = $_POST['intro'];
        $count = $_POST['count'];
        $img = $_POST['img'];
        $imglist = $_POST['imglist'];
        $detail = $_POST['detail'];
        $showlist = $_POST['showlist'];
        $createtime = time();
        $good = new Good($type1,$type2,$goodname,$color,$size,$price,$intro,$count,$img,$imglist,$detail,$showlist,$createtime);
        //执行修改商品的函数
        $service->updateProduct($id,$good);
        break;
    case 'delete':
        $goodid = $_POST['goodid'];
        //执行删除商品的函数
        $service->deleteProduct($goodid);
        break;
    case 'new':
        //执行新品首发的函数
        $service->newProduct();
        break;
    case 'newmore':

        //执行查看更多新品首发的函数
        $service->newallProduct();
        break;
    case 'hot':
        //执行人气商品的函数
        $service->hotProduct();
        break;
    case 'hotmore':
        //执行查看更多人气商品的函数
        $service->hotmoreProduct();
        break;
    case 'check':
        //根据商品的type1和type2在页面对应位置显示商品的函数
        $type1 = $_POST['type1'];
        $type2 = $_POST['type2'];
        $service->checkProduct($type1,$type2);
        break;
    case 'checkmore':
        $type1 = $_POST['type1'];
        $type2 = $_POST['type2'];
        //执行查看更多商品的函数
        $service->checkmoreProduct();
        break;
    case 'gooddata':
        $goodid = $_POST['goodid'];
        //执行点击商品跳转到详情页的函数
        $service->dataPage($goodid);

}

