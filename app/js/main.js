$(function () {
  $('.popular__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="предыдущий слайд"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="следующий слайд слайд"></button>',
    responsive: [
      {
      breakpoint: 9999,
      settings: "unslick"
    },
    {
      breakpoint: 1200,
      settings: {
       centerMode: true,
       infinite: true,
       slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
       infinite: true,
       slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
       slidesToShow: 2,
      }
    },
    {
      breakpoint: 576,
      settings: {
       slidesToShow: 1,
      }
    }
  ]
  });

  $('.reviews__slider').slick({
    slidesToShow: 2
  });

  $('.menu__burger').on('click', function(){
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.menu__wrapper').toggleClass('menu__wrapper--active');
  });
});