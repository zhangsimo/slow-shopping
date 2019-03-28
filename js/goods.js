$(function(){
    var id = location.search
    var total

    id = id.split('=')[1]
    var num = 1
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: id
        },
        success:function(res){
            $('.nav_list').html(template('tml',res))
        }
    })
    render(id ,num)
    function render(id ,num){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproductlist',
            data:{
                categoryid: id,
                pageid: num
            },
            success: function(res){
                
            total=res.totalCount
            var arr = []
            for ( var i = 1 ; i <= Math.ceil(total/10) ; i++) {
            
                arr.push(i+"/"+Math.ceil(total/10)) 
            }
            res.arr = arr
            
            $('.product_img').html(template('tml2',res))
            $('#selet').html(template('tml3',res))
            $('#selet').val(num)

            }
        })
        
    }
  
    $('.btn-up').on('click',function(){
        num--
        num = num < 1 ? 1 :num
       render(id ,num)
        
    })
    $('.btn-down').on('click',function(){
      num++
      
      num = num < Math.ceil(total/10) ? num : Math.ceil(total/10)
       render(id ,num)
    }) 


    
     
    $('#selet').on('change',function(){
      num= $('#selet').val().split('/')[0]
      render(id ,num)
       
    })

    $('.product_img').on('click','.clearfix',function(){
      var Id= $(this).data('id')
      var name = $(this).data('name').split(" ")[0]
      var product = $(this).data('product')
      console.log(product);
      
      location.href='commodity.html?='+Id +'='+name+'='+product
    })
  
})