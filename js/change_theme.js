const link = $("#theme-link");
const lightTheme = "styles/styles-light.css";
const darkTheme = "styles/style-dark.css";
$(function() {
    const Theme = localStorage.getItem('theme');
    
    if(Theme == "light")
    {
        link.attr("href", lightTheme);
        $('.theme_sun').css({'display' : 'flex'});
        $('.theme_moon').css({'display' : 'none'});
    }
    else 
    {
        link.attr("href", darkTheme);
        $('.theme_sun').css({'display' : 'none'});
        $('.theme_moon').css({'display' : 'flex'});
    }
});
const ChangeTheme = () =>
{
    let currTheme = link.attr("href");
    let theme = "";
    if(currTheme == lightTheme)
    {
   	    currTheme = darkTheme;
   	    theme = "dark";
        $('.theme_sun').css({'display' : 'none'});
        $('.theme_moon').css({'display' : 'flex'});
    }
    else
    {    
        currTheme = lightTheme;
   	    theme = "light";
        $('.theme_sun').css({'display' : 'flex'});
        $('.theme_moon').css({'display' : 'none'});
    }

    link.attr("href", currTheme);
    localStorage.setItem('theme' , theme);
}
$('.change_theme').on("click", ChangeTheme);
