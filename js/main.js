/**
 * Created by Иван on 06.04.2017.
 */
$(document).ready(function() {
    $('.main-slider').slick({
        arrows: false,
        centerMode: true,
        centerPadding: '25%',
        dots: true,
        dotsClass: 'main-slider__pagination',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1460,
                settings: {
                    centerPadding: '20%'
                }
            },
            {
                breakpoint: 1250,
                settings: {
                    centerPadding: '13%'
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    centerMode: false,
                    slidesToShow: 1
                }
            }
        ]
    });
    $(".form-phone__btn").fancybox();
});
