$(document).ready(function(){
  $('.quotes-carousel').slick({
    autoplay: true,
    slidesToShow: 2,
    responsive: [{
      breakpoint: 778,
      settings: {
        slidesToShow: 2,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        arrows: false,
        dots: true
      }
    }
  ]
  });
});
