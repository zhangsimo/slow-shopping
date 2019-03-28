$(function(){
    var id = location.search.split('=')[1]
    $.ajax({
        url:'http://127.0.0.1:9090/api/getdiscountproduct',
        data:{
            productid: id
        },
        success: function(res){
            console.log(res);
            
            $('.main').html(template('tml',res))
            $('.pl').html(template('tml2',res))
        }
    })
    
})