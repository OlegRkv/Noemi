$(function () {
  $('.reviews__slider').slick({
    slidesToShow: 2,
  });

  $('.menu__burger').on('click', function(){
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.menu__wrapper').toggleClass('menu__wrapper--active');
  });
});