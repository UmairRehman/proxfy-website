$(document).ready(function(){
    
    $('.mob-menu-btn').click(function(){
        $('.mobile-nav').addClass('active');
    });

    $('.mobile-nav i.fa-times').click(function(){
        $('.mobile-nav').removeClass('active');
    });

    $(document).mouseup(function(e) {
        var container = $(".mobile-nav, .mob-menu-btn");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.mobile-nav').removeClass('active');
        }
    })
    
    var swiper = new Swiper(".testimonial-slider", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $('.faqs-p-main ul li span').click(function() {
        $(this).parent().toggleClass('active');
    });
});