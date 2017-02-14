$(document).ready(function(){

    $(window).scroll(function(){

        function elementScrolled(elem)
        {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }
         
        if(elementScrolled('.progressCircle')) {
            circle = $('.stOverlay');
            if(!circle.hasClass('stOverlayAnimate')) {
                circle.addClass('stOverlayAnimate');
            }
        }

        if(elementScrolled('.progressBar')) {
            water = $('.progressWater');
            adopt = $('.progressAdopt');
            hunger = $('.progressHunger');

            if(!water.hasClass('water')) {
                water.addClass('water');
            }

            if(!adopt.hasClass('adopt')) {
                adopt.addClass('adopt');
            }

            if(!hunger.hasClass('hunger')) {
                hunger.addClass('hunger');
            }
        }

    });
});