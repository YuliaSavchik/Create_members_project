$('.button_two').on('click' , function()
{
    $('.prices_pay_anually').css({'display' : 'none'});
    $('.prices_pay_monthly').css({'display' : 'flex'});
    $('.button_centre_two').css({'display' : 'flex'});
    $('.button_two').css({'background-color' : '#EBEBEB'});
    $('.for_text_two').css({'color' : '#000000'});
    $('.for_text_one').css({'color' : '#A1A1A1'});
    $('.text_blue').css({'display' : 'none'});
    $('.button_centre_one').css({'display' : 'none'});
    $('.button_one').css({'background-color' : 'transparent'});
});
$('.button_one').on('click' , function()
{
    $('.prices_pay_anually').css({'display' : 'flex'});
    $('.prices_pay_monthly').css({'display' : 'none'});
    $('.button_centre_one').css({'display' : 'flex'});
    $('.button_centre_two').css({'display' : 'none'});
    $('.button_one').css({'background-color' : '#EBEBEB'});
    $('.button_two').css({'background-color' : 'transparent'});
    $('.for_text_two').css({'color' : '#A1A1A1'});
    $('.for_text_one').css({'color' : '#000000'});
    $('.text_blue').css({'display' : 'flex'});
});