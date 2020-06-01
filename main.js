检测移动端()
date=new Date()
welcomestr="今天是"+date.getFullYear()+"年"+(date.getMonth()+1)+'月'+date.getDate()+"日,感谢又一位大佬的访问"
$(document).ready(function(){
    $("#welcome").text(welcomestr)
})
function 检测移动端() {
    ua=navigator.userAgent
    console.log(ua)
    reg=/Android|webOS|iPhone|iPod|BlackBerry/i
    if(ua.search(reg)!=-1){
            devicewarning=confirm("检测到正在手机端查看，可能会遇到排版问题，去看看作者在boss直聘上的简历吗？")
            devicewarning?window.open("https://m.zhipin.com/mpa/html/resume-detail?sid=self&securityId=nDLd_3PylyWK7KksGBxSZuywgB7R0TeHJy3SZMk996-QliRxQYQTjCGk17ZVKF3tpZEczC9OPsymc5RsRUzCVe4sQjktAT5mBmx3AbmIASJveEWS4gfn3hL1bG807MZ3ztZYHuJw0g~~","_self"):alert("请左右滑动查看网页")
    }
    else{
        //console.log("电脑端")
    }
}