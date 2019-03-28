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

})