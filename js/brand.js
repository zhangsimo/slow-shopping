$(function(){
    var id = location.search.split('=')[1],
        num = 4
    render1(id)
    function render1(id){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getbrand',
            data: {
                brandtitleid:id
            },
            success:function(res){
                
                $('.nav').html(template('tml',res))
                
                $('.order').eq(0).css('background','red')
                $('.order').eq(1).css('background','orange')
                $('.order').eq(2).css('background','green')
                
            }
        })

    }
    
    render2(id ,num)
    function render2(id ,num){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getbrandproductlist',
            data:{
                brandtitleid: id,
                pagesize : num
            },
            success: function(res){
                $('.product_img').html(template('tml2',res))
            }
        })
        
    }

    $('.product_img').on('click','.pl-id', function(){
        var id = $(this).data('id')
        var that= this
        var img = $(this).data('img')
        var tit =$(this).data('name')
        
        $('.top-left').html(img)
        $('.top-right').html(tit)
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproductcom',
            data:{
                productid: id
            },
            success:function(res){
                res.img = img
                res.tit = tit
                console.log(res);
                $(that).parent().parent().parent().parent().next().find('ul').html(template('tml3',res))
                $(that).parent().parent().parent().parent().next().stop().slideToggle('slow')
            }
        })
        
    })

})