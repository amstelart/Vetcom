$( document ).ready(function() {

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

  // $('a[data-toogle="tab"]').on('click', function(e) {
  //    $('.product-carousel').slick('reinit');
  // });

  $(window).on("load resize", function(){
    var width = $(document).width();

    if (width > 1200) {
      $('.product-carousel').slick('unslick');
    } else {
      $('.product-carousel').not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true,
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
    }
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
