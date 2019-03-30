$(function(){
    var id = location.search.split('=')[1]
    var txt= location.search.split('=')[2]
        txt= decodeURI(txt)
    $('.title_name').text(txt)    
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcouponproduct',
        data: {
            couponid: id
        },
        success: function(res){
         console.log(res);
         
        $('.product_img').html(template('tml2',res))
        }
    })

    $('.product_img').on('click','.mm_img',function(){
        var id = $(this).data('id')
        $('#myModal').modal()
        $.ajax({
            url:'http://127.0.0.1:9090/api/getcouponproduct',
            data: {
                couponid: id
            },
            success: function(res){
                
                
            }
        })
        
    })
    

})