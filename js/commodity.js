$(function () {
    var id = location.search.split('=')[1]
    var name = location.search.split('=')[2]
        name = decodeURI(name)
    // var pageid = 1
    var productId = location.search.split('=')[3]
    
    render(productId)
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getcategorybyid',
        data: {
            categoryid: id
        },
        success: function (res) {
            res.name = name
            $('.nav_list').html(template('tml', res))

        }
    })

    function render(productId){
        $.ajax({
            url:'http://127.0.0.1:9090/api/getproduct',
            data:{
                productid:productId
            },
            success: function(res){
                $('.price').html(template('tml2',res))
                $('.bug').html(template('tml3',res))
            }
        })
    }

    $.ajax({
        url:'http://127.0.0.1:9090/api/getproductcom',
        data: {
            productid:productId
        },
        success:function(res){
            console.log(res);
            $('.buy_comment').html(template('tml4',res))
            
        }
    })

})