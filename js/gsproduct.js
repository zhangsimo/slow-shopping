$(function(){
    var shopid = 0,
        areaid = 0
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshop',
        success:function(res){
            $('.jd').html(template('tml',res))
        }
    })
    $.ajax({
        url:'http://127.0.0.1:9090/api/getgsshoparea',
        success:function(res){
            $('.hb').html(template('tml1',res))
            
        }
    })

    $('.jd').on('click','a',function(){
        var txt = $(this).text()+"<span class='trigon'>▼</span>"
       
        $(this).parent().parent().parent().find('button').html(txt);
        shopid = $(this).data('id')
        render(shopid ,areaid )
        
    })
    $('.hb').on('click','a',function(){
        var txt = $(this).text()+"<span class='trigon'>▼</span>"
        $(this).parent().parent().parent().find('button').html(txt);
        areaid = $(this).data('id')
        render(shopid ,areaid )
        
    })

    $('.dropdown ').on('click',function(){
        if ($(this).hasClass('open')) {
            $(this).find('span').html('▼')
            
        }else{
            $(this).find('span').html('▲')
        }
        
    })

    render(shopid ,areaid )
    function render(shopid ,areaid ){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getgsproduct',
            data:{
                shopid:shopid,
                areaid:areaid
            },
            success: function(res){
                console.log(res);
                $('.cutter').html(template('tml2',res))
                
            }
        })
    }
   
})