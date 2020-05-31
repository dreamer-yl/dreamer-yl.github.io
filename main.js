date=new Date()
welcomestr="今天是"+date.getFullYear()+"年"+(date.getMonth()+1)+'月'+date.getDate()+"日,感谢又一位大佬的访问"
$(document).ready(function(){
    $("#welcome").text(welcomestr)
})