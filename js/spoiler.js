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
    let elementUp = $(`div[spoilerId="${idUp}"]`)
     if(elementUp.css('display') != 'none')
    {
        $(elementUp).slideUp(400);
        plus[idUp - 1].css({'display' : 'flex'});
        minus[idUp - 1].css({'display' : 'none'});
    }
});