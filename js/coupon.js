$(function(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcoupon',
        success: function(res){
            // console.log(res);
            $('.main').html(template('tml',res))
        }
    })

    $('.main').on('click','.one',function(){
        var id = $(this).data('id')
        var txt = $(this).find('p').text()
        
        location.href="couponproduct.html?="+id+"="+txt
        
    })
})