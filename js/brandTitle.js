$(function(){

    render()
function render(){
    $.ajax({
        url:'http://127.0.0.1:9090/api/getbrandtitle',
        success:function(res){
            console.log(res);
            
        $('.nav').html(template('tml',res))  
            
        }
    })
}
$('.nav').on('click','a',function(){
   
    var id = $(this).data('id')
    console.log(id);
    
    location.href='brand.html?id='+id
    
})




})