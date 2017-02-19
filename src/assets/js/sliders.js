$(document).ready(function(){

    var causesSlider = new Swiper ('.causesSliderContainer', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loopAdditionalSlides: 0,
        nextButton: '.causesNext',
        prevButton: '.causesPrev',
        autoResize: false,
        breakpoints: {
            1170: {
                slidesPerView: 2
            },
            940: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 1
            },
            480: {
                slidesPerView: 1
            }
        }

    });

    var gallerySlider = new Swiper ('.gallerySliderContainer', {
        loop: true,
        slidesPerView: 4,
        centeredSlides: true,
        loopAdditionalSlides: 0,
        nextButton: '.galleryNext',
        prevButton: '.galleryPrev',
        breakpoints: {
            1170: {
                slidesPerView: 3
            },
            940: {
                slidesPerView: 2
            },
            767: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }

    });
});