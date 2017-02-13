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
        

       

        // console.log('Do I have a class of open?');
        // console.log(button);
        // if(button.hasClass('open')) {
        //     console.log('Yup!');
        //     button.removeClass('open');
        // }
        // else {
        //     console.log('Nah');
        //     button.addClass('open');
        // }
        
        // console.log("I WAS CLICKED");
        // console.log(button);
        // console.log(answer);

    });
});