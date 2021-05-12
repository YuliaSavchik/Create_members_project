const StartSlidesOne = (IndexSldOne = null , nowSldOne = false , prevSldOne = false) =>
{
    const sldOne = () =>
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