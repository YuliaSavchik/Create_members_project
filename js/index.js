$(window).on('scroll' , function(){
    if($('html').scrollTop() > 1600)
    {
        $('.animation_one').fadeIn(1000);
        if($(window).scrollTop() > 2200)
        {
            $('.animation_two').fadeIn(1000);
            if($(window).scrollTop() > 2700)
            {
                $('.animation_three').fadeIn(1000);
                if($(window).scrollTop() > 3200)
                {
                    $('.animation_four').fadeIn(1000);
                }
            }
        }
    }
});

let StartSlidesOne = (IndexSldOne = null , nowSldOne = false , prevSldOne = false) =>
{
    let sldOne = () =>
    {
        let currentImageSldOne = $('.current_one');
        let currentIndexSldOne = $(currentImageSldOne).index();
        let nextIndexSldOne;
        if(prevSldOne)
        {
            nextIndexSldOne = currentIndexSldOne - 1;
            if(nextIndexSldOne < 0)
                nextIndexSldOne = $('.images_sld_one').length - 1;
        }
        else
            nextIndexSldOne = IndexSldOne || currentIndexSldOne + 1;
        let nextImageSldOne = $('.images_sld_one').eq(nextIndexSldOne);
        let currentNamber = '0' + (nextIndexSldOne + 1);
        $(currentImageSldOne).fadeOut(500);
        $(currentImageSldOne).removeClass('current_one');
        if(nextIndexSldOne == $('.images_sld_one').length)
        {
            $('.images_sld_one').eq(0).fadeIn(500);
            $('.images_sld_one').eq(0).addClass('current_one');
            $('.current_number').text('01');
        }
        else
        {
            $(nextImageSldOne).fadeIn(500);
            $(nextImageSldOne).addClass('current_one');
            $('.current_number').text(currentNamber);
        }
    };
    if(nowSldOne) sldOne();
    IndexSldOne = null;
    return setInterval(() => sldOne() , 15000);
};
let startSlidesOne = StartSlidesOne();
$('#next_one_sld').on('click' , e =>
{
    clearInterval(startSlidesOne);
    startSlidesOne = StartSlidesOne(null , true);
});
$('#previous_one_sld').on('click' , e =>
{
    clearInterval(startSlidesOne);
    startSlidesOne = StartSlidesOne(null , true, true);
});

let markers = [$('.marker-1') , $('.marker-2') , $('.marker-3') , $('.marker-4') , $('.marker-5')];
let StartSlidesTwo = (IndexSldTwo = null , nowSldTwo = false , prevSldTwo = false) =>
{
    let sldTwo = () =>
    {
        let currentImageSldTwo = $('.current_two');
        let currentIndexSldTwo = $(currentImageSldTwo).index();
        let nextIndexSldTwo;
        if(prevSldTwo)
        {
            nextIndexSldTwo = currentIndexSldTwo - 1;
            if(nextIndexSldTwo < 0)
                nextIndexSldTwo = $('.images_sld_two').length - 1;
        }
        else
            nextIndexSldTwo = IndexSldTwo || currentIndexSldTwo + 1;
        let nextImageSldTwo = $('.images_sld_two').eq(nextIndexSldTwo);
        $(currentImageSldTwo).fadeOut(500);
        $(currentImageSldTwo).removeClass('current_two');
        markers[currentIndexSldTwo].removeClass('marked');
        if(nextIndexSldTwo == $('.images_sld_two').length)
        {
            $('.images_sld_two').eq(0).fadeIn(500);
            $('.images_sld_two').eq(0).addClass('current_two');
            markers[0].addClass('marked');
        }
        else
        {
            $(nextImageSldTwo).fadeIn(500);
            $(nextImageSldTwo).addClass('current_two');
            markers[nextIndexSldTwo].addClass('marked');
        }
    };
    if(nowSldTwo) sldTwo();
    IndexSldTwo = null;
};
let startSlidesTwo = StartSlidesOne();
$('#next_two').on('click' , e =>
{
    startSlidesTwo = StartSlidesTwo(null , true);
});
$('#previous_two').on('click' , e =>
{
    startSlidesTwo = StartSlidesTwo(null , true, true);
});
$('.sld_markers > *').on('click' , e =>
{
    startSlidesTwo - StartSlidesTwo($(e.target).attr('value') , true);
});

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

let plus = [$('.plus-1') , $('.plus-2') , $('.plus-3') , $('.plus-4') , $('.plus-5')]
let minus = [$('.minus-1') , $('.minus-2') , $('.minus-3') , $('.minus-4') , $('.minus-5')]
$('.plus').on('click' , function(event){
    let idDown = $(event.target).attr('spoilerId');
    let elementDown = $(`div[spoilerId="${idDown}"]`)
    if(elementDown.css('display') == 'none')
    {
        $(elementDown).slideDown(400);
        plus[idDown - 1].css({'display' : 'none'});
        minus[idDown - 1].css({'display' : 'flex'});
    }   
});
$('.minus').on('click' , function(event){
    let idUp = $(event.target).attr('upId');
    console.log(idUp);
    let elementUp = $(`div[spoilerId="${idUp}"]`)
    console.log(elementUp);
     if(elementUp.css('display') != 'none')
    {
        $(elementUp).slideUp(400);
        plus[idUp - 1].css({'display' : 'flex'});
        minus[idUp - 1].css({'display' : 'none'});
    }
});

$('.arrow_page_top').on('click' , function(e)
{
    e.preventDefault();
    $('html , body').animate({scrollTop: 0} , '500');
});

const link = $("#theme-link");
const lightTheme = "styles/styles-light.css";
const darkTheme = "styles/style-dark.css";

$(function() {
    const Theme = localStorage.getItem('theme');
    
    if(Theme == "light")
        link.attr("href", lightTheme);
    else link.attr("href", darkTheme);
});
const ChangeTheme = () =>
{
    let currTheme = link.attr("href");
    let theme = "";
    if(currTheme == lightTheme)
    {
   	    currTheme = darkTheme;
   	    theme = "dark";
    }
    else
    {    
        currTheme = lightTheme;
   	    theme = "light";
    }

    link.attr("href", currTheme);
    localStorage.setItem('theme' , theme);
}
$('.button_change_theme').on("click", ChangeTheme );

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
        console.log($('.input_login').val());
        console.log($('.input_pass').val());
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

$('.money').on('click' , function(e)
{
    e.preventDefault();
    $('.page_currency').css({'display' : 'flex'});
});
$('.currency_eur').on('click' , function(e)
{
    e.preventDefault();
    let textEur = $('.currency_eur').text();
    $('.eng').text('€' + textEur);
    $('.page_currency').css({'display' : 'none'});
});
$('.currency_rus').on('click' , function(e)
{
    e.preventDefault();
    let textRus = $('.currency_rus').text();
    $('.eng').text('₽' + textRus);
    $('.page_currency').css({'display' : 'none'});
});
$('.currency_usd').on('click' , function(e)
{
    e.preventDefault();
    let textUsd = $('.currency_usd').text();
    $('.eng').text('$' + textUsd);
    $('.page_currency').css({'display' : 'none'});
});
$('.close_currency').on('click' , function(e)
{
    e.preventDefault();
    $('.page_currency').css({'display' : 'none'});
});
