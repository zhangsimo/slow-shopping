$(function(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getsitenav',
        success:function(res){
            console.log(res);
        $('.main').html(template('tml',res))    
            
        }
    })
})