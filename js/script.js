$(document).ready(function () {

    $('#hamburger').click(function () {
        $(this).children('.bars').toggleClass('open-menu');
        $(this).siblings('.navbar').slideToggle();
        $('body').toggleClass('over-hidden');
    });


        $('.hero-banner').slick({
            dots: false,
            infinite: false,
            arrows: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    

        $('.testimonial-slider').slick({
            dots: true,
            infinite: false,
            arrows: false,
            speed: 800,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    

    
    
    
    
    
    
})