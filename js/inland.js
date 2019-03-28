$(function(){


    $.ajax({
        url:'http://127.0.0.1:9090/api/getinlanddiscount',
        success: function(res){
            // console.log(res);
            $('.main').html(template('tml',res))
        }
    })

    $('.main').on('click' ,'.one' ,function(){
        var id = $(this).data('id')
        location.href='cheap.html?='+id
    })
})