$(document).ready(function(){
  var carousel = $(".owl-carousel");

  carousel.owlCarousel({
        items:4,
        loop:true,
        center:true,
        margin:0
    });    

    $( ".owl-prev").click(function(e) {
        e.preventDefault();
        carousel.trigger('prev.owl.carousel');
    });

    $( ".owl-next").click(function(e) {
        e.preventDefault();
        carousel.trigger('next.owl.carousel');
    });


  // $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
});