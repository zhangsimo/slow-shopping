$(function(){
    var id=0
    var myScroll = new IScroll($('.nav')[0],{
        scrollX:true
    });
    // console.log($('.nav')[0]);
    render(id)
    
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiatitle',
        success:function(res){
           $('.nav_ul').html(template('tml',res)) 
            var w= 0;
           for ( var i = 0 ; i < $('.lis').length ; i++) {
            //    var li = $('.lis')[i]
                w += $('.lis').eq(i).outerWidth()
                   
           }
            w += $('.lis').eq(1).outerWidth()*1
            $('.nav_ul').width(w)
            $(".nav_ul").children(":first").children().addClass("active")
            $('.nav_ul').on('click',".lis",function(){
                 id = $(this).data('id')
            $(".nav_ul").children(":first").children().removeClass("active")
                 render(id)
            })
            
        }
    })
    
    
    

function render(id){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbaicaijiaproduct',
        data: {
            titleid: id
        },
        success:function(res){
            console.log(res);
            $('.main').html(template('tml2',res))
        }
    })
}
})