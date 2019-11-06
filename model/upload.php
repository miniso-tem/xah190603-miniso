<?php
/**
 * Created by PhpStorm.
 * User: LX
 * Date: 2019/11/5
 * Time: 15:36
 */
//判断上传的文件是否出错，是的话，返回错误
if($_FILES["file"]["error"]){
    echo $_FILES["file"]["error"];
}else{
    //没有出错，加限制条件，判断上传文件的类型为png或jpeg且文件大小不超或1024000B
    if($_FILES["file"]["type"]=="image/png" || $_FILES["file"]["type"] == "image/jpeg" || $_FILES["file"]["type"] == "image/jpg" && $_FILES["file"]["size"] < 1024000000){
        //防止文件重名
        //为图片重新命名且不能重复
        $imgt = substr($_FILES["file"]["type"],6);
        $imgname = time().'.'.$imgt;
        $filename = '../web/imgs/'.time().'.'.$imgt;
        //转码，把utf-8转成gb2312，返回转化后的字符串，或者在失败的时候返回false。
        $filename = iconv("UTF-8","gb2312",$filename);
        //检查文件或目录是否存在
        if(file_exists($filename)){
            echo "该文件已存在";
        }else{
            //保存文件，move_upload_file将上传的文件移动到指定地址
            move_uploaded_file($_FILES["file"]["tmp_name"],$filename);
            //将临时地址移动到指定地址
            echo "http://localhost/190603/5-演示/web/imgs/{$imgname}";
        }
    }else{
        echo "文件类型不对或者文件大小出错";
    }
}









