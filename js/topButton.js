$(function(){
    $("div#top").fadeOut(0);
    
    $(window).scroll(function(){
        var winSct = $(window).scrollTop();
    
        if(winSct==0){
            $("div#top").fadeOut(0);
        }else{
            $("div#top").fadeIn(0);
        }
    })
    
    $("div#top").click(function(){
        $("body,html").animate({scrollTop:0});
    })
})