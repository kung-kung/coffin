$(function(){
    $(".menu>ul>li").hover(function(){
        $(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })
})