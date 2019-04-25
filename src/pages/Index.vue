<template>
  <Layout>
    <div class="hero-wrapper mb-4">
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Wilder than the Wind - Edmonton'
  },
  mounted() {
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
