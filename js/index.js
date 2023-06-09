$(function(){
    $(".pop").slideDown()
    $(".menu>ul>li, .hd_b").hover(function(){
        // $(".menu_bg").stop().slideDown()
        $(".sub").stop().fadeIn("slow")
        // $(".sub").stop().slideDown()
        $(".hd_b").stop().animate({height:"400px"},500)
    },function(){
        // $(".menu_bg").stop().slideUp()
        $(".sub").stop().fadeOut("fast")
        // $(".sub").stop().slideUp()
        $(".hd_b").stop().animate({height:"103px"},500)
    })

    $(".m").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true
    })
    $(".sc5_l ul").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    })
    $(".line div").click(function(e){
        e.preventDefault()
        $(this).addClass("on")
        $(this).siblings().removeClass("on")
    })
    $(".p_close").click(function(){
        $(".pop").stop().slideUp()
    })
})

$(window).scroll(function(){
    $(".top").click(function(){
        $("html, body").animate({scrollTop:0},500)
    })
})