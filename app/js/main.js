$(function () {
  /* Slick slider */
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
    slidesToShow: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  });

  

/* Mobile menu */
  $('.menu__burger').on('click', function(){
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.menu__wrapper').toggleClass('menu__wrapper--active');
  });

  /* Delete grid wrapper (section works) */
  if ($(window).width() <= 576) {
    $('.works__img').unwrap();
  }

  $('.works__list').slick({
    prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/arrow-left.svg" alt="предыдущий слайд"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/icons/arrow-right.svg" alt="следующий слайд слайд"></button>',
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint :576.9,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true
        }
      }
    ]
  });

  if ($(window).width() <= 1024) {
    $('.footer__address > br').remove();
  }
});