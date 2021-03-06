$( document ).ready(function() {

  $("#my-menu").mmenu({
   // options
   "slidingSubmenus": true,
   "extensions": ["widescreen", "pagedim-black", "position-left"]
  }, {
     // configuration
     offCanvas: {
        pageSelector: "#my-wrapper"
     }
  });

  $('.sub-menu ul').hide();
  $(".sub-menu .sub-link").click(function () {
  	$(this).parent(".sub-menu").children("ul").slideToggle("100");
  	$(this).parent(".sub-menu").toggleClass("active");
  });

  // Маски для полей ввода
  $("#phone").mask("+7 (999) 99-99-999");
  $(".phone-mask").mask("+7 (999) 99-99-999");

  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
  });

  $('.product-tab-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  $('a[data-toogle="tab"]').on('click', function(e) {
     $('.product-carousel').slick('reinit');
  });

  $('.product-carousel').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false
        }
      }
    ]
  });

  $('.compare-carousel').slick({
    slidesToShow: 4,
    autoplay: false,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    centerMode: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          variableWidth: true
        }
      }
    ]
  });

  $('.product-case__media-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    asNavFor: '.product-case__media-nav'
  });
  $('.product-case__media-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-case__media-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    infinite: true,
    focusOnSelect: true
  });

});
