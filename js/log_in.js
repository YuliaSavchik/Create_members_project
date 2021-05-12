$('.link_button_log').on('click', function(e)
{
    e.preventDefault();
    $('.page_for_log_in').css({'display' : 'flex'});
});
let userNameIsTrue;
let passIsTrue;
$('#login').blur(function()
{
    userNameIsTrue = /^[a-z0-9_-]{3,16}$/.test(event.target.value);
    if(userNameIsTrue)
    {
        $('#login').addClass('success');
        $('#login').removeClass('error');
    }
    else
    {
        $('#login').addClass('error');
        $('#login').removeClass('success');
    }
});
$('#pass').blur(function()
{
    passIsTrue = /\d+/.test(event.target.value);
    if(passIsTrue)
    {
        $('#pass').addClass('success');
        $('#pass').removeClass('error');
    }
    else
    {
        $('#pass').addClass('error');
        $('#pass').removeClass('success');
    }
});
$('#sign_in').on('click' , function(e)
{
    e.preventDefault();
    if(userNameIsTrue == true && passIsTrue == true)
    {
        alert('Данные введены успешно!');
        $('.page_for_log_in').css({'display' : 'none'});
    }
    else
        alert('Одно из полей введено неправильно!'); 
});
$('.close_form').on('click', function(e)
{
    e.preventDefault();
    $('.page_for_log_in').css({'display' : 'none'});
});
$(window).on('scroll' , function()
{
    if($('html').scrollTop() > 400)
    $('.page_for_log_in').css({'display' : 'none'});
});