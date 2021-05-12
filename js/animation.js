let stopScroll1 = true;
let stopScroll2 = true;
let stopScroll3 = true;
let stopScroll4 = true;
$(window).on('scroll' , function(){
    if($('html').scrollTop() > 1600 && stopScroll1)
    {
        $('.animation_one').fadeIn(1000);
        stopScroll1 = false;
    }
    if($(window).scrollTop() > 2200 && stopScroll2)
    {
        $('.animation_two').fadeIn(1000);
        stopScroll2 = false;
    }
    if($(window).scrollTop() > 2700 && stopScroll3)
    {
        $('.animation_three').fadeIn(1000);
        stopScroll3 = false
    }
    if($(window).scrollTop() > 3200 && stopScroll4)
    {
        $('.animation_four').fadeIn(1000);
        stopScroll4 = false;
    }
});