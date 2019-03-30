$(function(){
    
    render()
    move()
    function render(){
        $.ajax({
            type:'get',
            url: 'http://127.0.0.1:9090/api/getindexmenu',
            success: function(res){
                
                $('.mm_nav_img').html(template('tml' ,res))
            }
        })
    }

    function move(){
        $.ajax({
            type: 'get',
            url:'http://127.0.0.1:9090/api/getmoneyctrl',
            success: function(res){
                $('.product_img').html(template('tml2',res))
            }
        })
    }

    $('.mm_nav_img').on('click','[data-id=7]',function(){
        $('.mm_nav').css({transition:'all 1s'})
        $('.mm_nav').toggleClass('heigh')
    })
    $('.mm_nav_img').on('click','[data-id = 0]' ,function(){
        location.href='price.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 1]' ,function(){
        location.href='save.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 2]' ,function(){
        location.href='inland.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 3]' ,function(){
        location.href='baicaijia.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 4]' ,function(){
        location.href='save.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 5]' ,function(){
        location.href='coupon.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 6]' ,function(){
        location.href='price.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 8]' ,function(){
        location.href='gsproduct.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 9]' ,function(){
        location.href='price.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 10]' ,function(){
        location.href='sitenav.html'
        
    })
    $('.mm_nav_img').on('click','[data-id = 11]' ,function(){
        location.href='brandTitle.html'
        
    })

})