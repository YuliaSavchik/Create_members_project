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