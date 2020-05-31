function changesrc(id,path){
$(document).ready(function(){
$(id).attr('src',path);
})
}
function 图灵机器人聊天(inputid,outputid){
$(document).ready(function(){
    $(outputid).text("等待图灵机器人返回数据中")
     $.post("https://www.tuling123.com/openapi/api",
      {
        key:"40d56dcf5e1d4edc8a891eb824a11437",
        info:$(inputid).val(),
        userid:"1",
      },
      function(data){
        $(outputid).text(data.text);
      });
    });
}