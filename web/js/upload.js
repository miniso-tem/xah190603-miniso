//有参数，要上传的文件信息和上传成功之后的回调
function upFn(filedata,callback){
    //创建一个formdata对象，用来大宝文件 数据
    const fd = new FormData();
    //将文件信息打包到fd中
    fd.append('file',filedata);
    //创建ajax对象
    var ajax = new XMLHttpRequest();
    ajax.open('post','../../model/upload.php');
    ajax.send(fd);
    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            callback(ajax.responseText);
        }
    }
}
