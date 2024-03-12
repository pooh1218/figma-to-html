
// index page carousels
jQuery(".hero-carousel").owlCarousel({
    autoplay: false,
    rewind: false,
    loop: true,
    margin: 0, 
    responsiveClass: true,
    autoHeight: true,
    nav: true,
    dots: true,
    items: 1
});
$( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$( ".owl-next").html('<i class="fa fa-chevron-right"></i>');

$(".btn-grid-list").click(function(){
    $(".btn-grid-list").removeClass("active");
    $(".grid-list-item").removeClass("show");
    var showId = $(this).attr("data-target-id");
    $(this).addClass("active")
    $(showId).addClass("show")
})