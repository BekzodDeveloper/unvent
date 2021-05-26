$(document).ready(function () {
  $('.content__facts-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: false,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },
      }
    ]
  });
});

$('.content__facts-slider').on('click', function () {
  console.log('Hello!');
})