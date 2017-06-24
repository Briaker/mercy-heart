$(document).ready(function(){
    
    function elementOnScreen(element) {
        // The position of the top of the view on the scroll bar
        var docViewTop = $(window).scrollTop();

        // The position of the bottom of the view on the scroll bar
        var docViewBottom = docViewTop + $(window).height();

        // The position of the top of the element on the scroll bar
        var elementTop = $(element).offset().top;

        // Returns true if the element is within the bounds of the current view
        return ((elementTop <= docViewBottom) && (elementTop >= docViewTop));
    }

    

    $(window).scroll(function(){
        
        if(elementOnScreen('.progressCircle')) {
            circle = $('.stOverlay');
            if(!circle.hasClass('stOverlayAnimate')) {
                circle.addClass('stOverlayAnimate');
            }
        }

        if(elementOnScreen('.progressBar')) {
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