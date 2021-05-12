let markers = [$('.marker-1') , $('.marker-2') , $('.marker-3') , $('.marker-4') , $('.marker-5')];
const StartSlidesTwo = (IndexSldTwo = null , nowSldTwo = false , prevSldTwo = false) =>
{
    const sldTwo = () =>
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