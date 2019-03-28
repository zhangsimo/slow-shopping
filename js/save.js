$(function(){

    $(function(){
        var total
        var num = 1
        render(num)
        function render(num){
            $.ajax({
                url:'http://127.0.0.1:9090/api/getmoneyctrl',
                data: {
                    pageid :num
                },
                success: function(res){
                    console.log(res);
                    
                total=res.totalCount
                var arr = []
                for ( var i = 1 ; i <= Math.ceil(total/10)-1 ; i++) {
                
                    arr.push(i+"/"+(Math.ceil(total/10)-1) )
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
           render(num)
            
        })
        $('.btn-down').on('click',function(){
          num++
          
          num = num < Math.ceil(total/10)-1 ? num : Math.ceil(total/10)-1
           render(num)
        }) 
    
    
        
         
        $('#selet').on('change',function(){
          num= $('#selet').val().split('/')[0]
          render(num)
           
        })
    
        $('.product_img').on('click','.clearfix',function(){
          var Id= $(this).data('id')
          
          
          location.href='discount.html?='+Id 
        })
      
    })






})