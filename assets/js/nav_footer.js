$.get("navigation.html", function(data){
    $("#navigation").replaceWith(data);
});
$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 30) {
        $('header').addClass('scrolled');
        $('a').addClass('scrolled');
        $('.menu-nav__item').addClass('scrolled');
        $('.menu-btn__burger').addClass('scrolled');
        $('.logo').addClass('scrolled');
    } else {
        $('header').removeClass('scrolled');
        $('a').removeClass('scrolled');
        $('.menu-nav__item').removeClass('scrolled');
        $('.menu-btn__burger').removeClass('scrolled');
        $('.logo').removeClass('scrolled');
    }
});
$.get("footer.html", function(data){
    $("#footer").replaceWith(data);
});