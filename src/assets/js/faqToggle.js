$(document).ready(function(){
    $('.faqToggleButton').on('click', function(){
        var button = $(this);
        var answerWrapper = button.parent().siblings('.answerWrapper').children('.answer');
        
        if(button.hasClass('open')) {
            button.removeClass('open');
            answerWrapper.removeClass('open');
        }
        else{

            $('.faqToggleButton').each(function() {
                if($(this).hasClass('open')) {
                    $(this).removeClass('open');
                }
            });

            $('.answer').each(function() {
                if($(this).hasClass('open')) {
                    $(this).removeClass('open');
                }
            });

            button.addClass('open');
            answerWrapper.addClass('open');
        }
    });

    $('.menuToggle').on('click', function(){
        var menuUl = $('.navBottomItems');
        
        menuUl.toggleClass('open');
    });
});