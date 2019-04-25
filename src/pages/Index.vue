<template>
  <Layout>
  <head>
    <title>Wilder than the Wind &mdash; Edmonton Art Studio</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,700,900">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Shadows+Into+Light">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--<link rel="stylesheet" href="assets/css/aos.css">-->
  </head>

  <body>
    <div class="hero-wrapper">
      <video autoplay muted loop id="bg-video">
        <source src="/video/032715490-dandelion-blowing-slow-motion_H264_420-web-xl.mp4" type="video/mp4">
      </video>
      <!--<div class="site-blocks-cover overlay aos-init aos-animate" style="background-image: url(images/hero_white.jpg)" data-aos="fade" data-stellar-background-ratio="0.5">-->
      <div class="site-blocks-cover overlay aos-init aos-animate" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center text-center justify-content-center" style="position: relative; top: -3rem;">
            <div class="col-md-8">
              <h1>Wilder than the Wind</h1>
              <span class="sub-text">creation.inspiration.education.elevation.</span>
            </div>
          </div>
        </div>
      </div>

      <div class="site-block-1">
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <a href="/classes" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons" style="font-size:40px;color:white;">brush</i>
                </div>
                <div class="text">
                  <h3>Art Workshops</h3>
                  <p>Check out our current classes on offer</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="#" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons" style="font-size:40px;color:white;">calendar_today</i>
                </div>
                <div class="text">
                  <h3>Events Calendar</h3>
                  <p>Explore our events page to find a class that will fit your schedule.</p>
                </div>
              </a>
            </div>
            <div class="col-lg-4">
              <a href="#" class="site-block-feature d-flex p-4 rounded mb-4">
                <div class="mr-3">
                  <i class="material-icons" style="font-size:40px;color:white;">local_grocery_store</i>
                </div>
                <div class="text">
                  <h3>Art for Sale</h3>
                  <p>Coming soon!</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>


    </body>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Wilder than the Wind - Edmonton'
  },
  mounted() {
     /*AOS.init({
      duration: 800,
      easing: 'slide',
      once: true
     });

    jQuery(document).ready(function($) {

      "use strict";



      var siteMenuClone = function() {

        $('.js-clone-nav').each(function() {
          var $this = $(this);
          $this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
        });


        setTimeout(function() {

          var counter = 0;
          $('.site-mobile-menu .has-children').each(function(){
            var $this = $(this);

            $this.prepend('<span class="arrow-collapse collapsed">');

            $this.find('.arrow-collapse').attr({
              'data-toggle' : 'collapse',
              'data-target' : '#collapseItem' + counter,
            });

            $this.find('> ul').attr({
              'class' : 'collapse',
              'id' : 'collapseItem' + counter,
            });

            counter++;

          });

        }, 1000);

        $('body').on('click', '.arrow-collapse', function(e) {
          var $this = $(this);
          if ( $this.closest('li').find('.collapse').hasClass('show') ) {
            $this.removeClass('active');
          } else {
            $this.addClass('active');
          }
          e.preventDefault();

        });

        $(window).resize(function() {
          var $this = $(this),
            w = $this.width();

          if ( w > 768 ) {
            if ( $('body').hasClass('offcanvas-menu') ) {
              $('body').removeClass('offcanvas-menu');
            }
          }
        })

        $('body').on('click', '.js-menu-toggle', function(e) {
          var $this = $(this);
          e.preventDefault();

          if ( $('body').hasClass('offcanvas-menu') ) {
            $('body').removeClass('offcanvas-menu');
            $this.removeClass('active');
          } else {
            $('body').addClass('offcanvas-menu');
            $this.addClass('active');
          }
        })

        // click outisde offcanvas
        $(document).mouseup(function(e) {
          var container = $(".site-mobile-menu");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
            if ( $('body').hasClass('offcanvas-menu') ) {
              $('body').removeClass('offcanvas-menu');
            }
          }
        });
      };
      siteMenuClone();


      var sitePlusMinus = function() {
        $('.js-btn-minus').on('click', function(e){
          e.preventDefault();
          if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
            $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
          } else {
            $(this).closest('.input-group').find('.form-control').val(parseInt(0));
          }
        });
        $('.js-btn-plus').on('click', function(e){
          e.preventDefault();
          $(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
        });
      };
      // sitePlusMinus();


      var siteSliderRange = function() {
        $( "#slider-range" ).slider({
          range: true,
          min: 0,
          max: 500,
          values: [ 75, 300 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
          " - $" + $( "#slider-range" ).slider( "values", 1 ) );
      };
      // siteSliderRange();


      var siteMagnificPopup = function() {
        $('.image-popup').magnificPopup({
          type: 'image',
          closeOnContentClick: true,
          closeBtnInside: false,
          fixedContentPos: true,
          mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
           gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            verticalFit: true
          },
          zoom: {
            enabled: true,
            duration: 300 // don't foget to change the duration also in CSS
          }
        });

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
      };
      siteMagnificPopup();


      var siteCarousel = function () {
        if ( $('.nonloop-block-13').length > 0 ) {
          $('.nonloop-block-13').owlCarousel({
            center: false,
            items: 1,
            loop: false,
            stagePadding: 0,
            margin: 20,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
            responsive:{
              600:{
                margin: 0,
                stagePadding: 10,
                items: 2
              },
              1000:{
                margin: 0,
                stagePadding: 0,
                items: 2
              },
              1200:{
                margin: 0,
                stagePadding: 0,
                items: 3
              }
            }
          });
        }

        $('.nonloop-block-13').owlCarousel({
          center: false,
          items: 1,
          loop: true,
          autoplay: true,
          stagePadding: 0,
          margin: 20,
          nav: true,
          navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
          responsive:{
            600:{
              margin: 0,
              stagePadding: 0,
              items: 2
            },
            1000:{
              margin: 0,
              stagePadding: 0,
              items: 2
            },
            1200:{
              margin: 0,
              stagePadding: 0,
              items: 3
            }
          }
        });

        if ( $('.slide-one-item').length > 0 ) {
          $('.slide-one-item').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            pauseOnHover: false,
            nav: true,
            navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
          });
        }
      };
      siteCarousel();

      var siteStellar = function() {
        $(window).stellar({
          responsive: false,
          parallaxBackgrounds: true,
          parallaxElements: true,
          horizontalScrolling: false,
          hideDistantElements: false,
          scrollProperty: 'scroll'
        });
      };
      siteStellar();

      var siteCountDown = function() {

        if ( $('#date-countdown').length > 0 ) {
          $('#date-countdown').countdown('2020/10/10', function(event) {
            var $this = $(this).html(event.strftime(''
              + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
              + '<span class="countdown-block"><span class="label">%d</span> days </span>'
              + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
              + '<span class="countdown-block"><span class="label">%M</span> min </span>'
              + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
          });
        }

      };
      siteCountDown();

      var siteDatePicker = function() {

        if ( $('.datepicker').length > 0 ) {
          $('.datepicker').datepicker();
        }

      };
      siteDatePicker();

    });*/
  },
}

</script>

<style>

.owl-carousel.owl-loaded {
    display: block;
}

.owl-carousel {
    display: none;
    width: 100%;
    z-index: 1;
}

.owl-carousel, .owl-carousel .owl-item {
    -webkit-tap-highlight-color: transparent;
    position: relative;
}

/* Good stuff here, pros on it */
.hero-wrapper {
  height: 100vh;
  overflow: hidden;
}

#bg-video {
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 0;
  object-fit: cover;
}

/* Adjust section z-index to accommodate for video index */
.site-section {
  position: relative;
  z-index: 1;
}
</style>
