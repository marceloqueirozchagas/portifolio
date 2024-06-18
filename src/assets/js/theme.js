; (function ($) {
    "use strict"

    setTimeout(() => {
        var nav_offset_top = $('header').height() + 50;

        // Navbar Fixed  
        function navbarFixed() {
            if ($('.header_area').length) {
                $(window).scroll(function () {
                    var scroll = $(window).scrollTop();
                    if (scroll >= nav_offset_top) {
                        $(".header_area").addClass("navbar_fixed");
                    } else {
                        $(".header_area").removeClass("navbar_fixed");
                    }
                });
            };
        };
        navbarFixed();

        $("#nav").find("a").click(function (e) {
            e.preventDefault();
            var section = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(section).offset().top
            });
        });

        //  Parallax Effect js
        function parallaxEffect() {
            $('.bg-parallax').parallax();
        }
        parallaxEffect();

        $('select').niceSelect();

        //  Testimonials Slider
        function testimonials_slider() {
            if ($('.testi_slider').length) {
                $('.testi_slider').owlCarousel({
                    loop: true,
                    margin: 30,
                    items: 3,
                    nav: false,
                    autoplay: true,
                    smartSpeed: 1500,
                    dots: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 3,
                        },
                    }
                })
            }
        }
        testimonials_slider();

    }, 500);


})(jQuery)