$(document).ready(function() {
  // var element = $('meta[name="active-menu"]').attr("content");
  // $("#" + element).addClass("active");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200)
    {
        if (!$('.navbar').hasClass('sticky-navbar'))
        {

            $('.navbar').stop().addClass('sticky-navbar').css('top', '-50px').animate(
                    {
                        'top': '0px'
                    }, 1000);
                    $('.navbar-header').addClass('navbar-header-onscroll');
                    $('.main-title').addClass('main-title-onscroll');
                    $('.nav.navbar-nav').addClass('nav-on-scroll');
        }
    } else
    {
        $('.navbar').removeClass('sticky-navbar');
        $('.navbar-header').removeClass('navbar-header-onscroll');
        $('.main-title').removeClass('main-title-onscroll');
        $('.nav.navbar-nav').removeClass('nav-on-scroll');
    }
});
});
