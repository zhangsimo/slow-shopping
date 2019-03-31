$(function(){

        render()
    function render(){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getcategorytitle',
            success:function(res){
            $('.nav').html(template('tml',res))  
                
            }
        })
    }
    $('.nav').on('click','a',function(){
        var id = $(this).data('id')
        var that = this
        $.ajax({
            url: 'http://127.0.0.1:9090/api/getcategory',
            data: {
                titleid: id
            },
            success: function(res){
               $(that).next().children().html(template('tml2',res))
               $(that).next().stop().slideToggle()
               
            }
        })
        
    })

    $('.nav').on('click','.nav-lis',function(){
        var id = $(this).data('id')
        location.href='goods.html?id='+id
        
        
    })


})