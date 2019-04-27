<template>
  <Layout>
    <div class="hero-wrapper">
      <video autoplay muted loop playsinline id="bg-video" class="hero-mask">
        <source src="/video/032715490-dandelion-blowing-slow-motion_H264_420-web-xl.mp4" type="video/mp4">
      </video>
      <!--<div class="site-blocks-cover overlay aos-init aos-animate" style="background-image: url(images/hero_white.jpg)" data-aos="fade" data-stellar-background-ratio="0.5">-->
      <div class="site-blocks-cover aos-init aos-animate" data-aos="fade" data-stellar-background-ratio="0.5">
        <div class="container">
          <div class="row align-items-center text-center justify-content-center" style="position: relative; top: -3rem;">
            <div class="col-md-8">
              <h1>Wilder than the Wind</h1>
              <span class="sub-text">creation.inspiration.education.elevation.</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section pb-0">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <a href="/classes" class="site-block-feature d-flex p-4 rounded mb-4">
              <div class="mr-3">
                <i class="material-icons block-icon">brush</i>
              </div>
              <div class="text">
                <h2 class="font-weight-bold text-black">Art Workshops</h2>
                <p>Check out our current classes and offerings.</p>
              </div>
            </a>
          </div>
          <div class="col-lg-4">
            <a href="#" class="site-block-feature d-flex p-4 rounded mb-4">
              <div class="mr-3">
                <i class="material-icons block-icon">calendar_today</i>
              </div>
              <div class="text">
                <h2 class="font-weight-bold text-black">Events Calendar</h2>
                <p>Explore our events page to find a class that will fit your schedule.</p>
              </div>
            </a>
          </div>
          <div class="col-lg-4">
            <a href="#" class="site-block-feature d-flex p-4 rounded mb-4">
              <div class="mr-3">
                <i class="material-icons block-icon">local_grocery_store</i>
              </div>
              <div class="text">
                <h2 class="font-weight-bold text-black">Art for Sale</h2>
                <p>Coming soon!</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section pt-0">
      <div class="container pt-4">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-11 ml-auto">
            <span class="sub-title">What Types of Classes Do We Offer?</span>
            <h2 class="font-weight-bold text-black mb-5">Popular Art Workshops:</h2>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4 project-entry">
            <a href="#" class="d-block figure">
              <img
                src="/images/inks_resin_crystal_glitter.jpg"
                alt="Image"
                class="img-fluid brush-01"
              />
            </a>
            <h3 class="mb-0">
              <a href="#">Ink, Resin and Crystals Art Escape</a>
            </h3>
            <br />
            <p class="text-muted">
              Escape into the world of glassy resin, crystals and semi precious
              stones.
            </p>
            <p>
              <a href="/classes" class="btn btn-primary btn-lg rounded-0"
                >Learn More</a
              >
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 project-entry">
            <a href="#" class="d-block figure">
              <img
                src="/images/oceanbeach.jpg"
                alt="Image"
                class="img-fluid brush-02"
              />
            </a>
            <h3 class="mb-0"><a href="#">Ocean in Resin Painting</a></h3>
            <br />
            <p class="text-muted">
              In this three hour art escape, we will paint a cross section of
              the ocean.
            </p>
            <p>
              <a href="/classes" class="btn btn-primary btn-lg rounded-0"
                >Learn More</a
              >
            </p>
          </div>
          <div class="col-lg-4 col-md-6 mb-4 project-entry">
            <a href="#" class="d-block figure">
              <img
                src="/images/edgy_abstract.jpg"
                alt="Image"
                class="img-fluid brush-03"
              />
            </a>
            <h3 class="mb-0"><a href="#">Edgy Abstracts Art Escape</a></h3>
            <br />
            <p class="text-muted">
              We will be “living on the edge” as we delve into a world of
              industrial, graffiti type painting.
            </p>
            <p>
              <a href="/classes" class="btn btn-primary btn-lg rounded-0"
                >Learn More</a
              >
            </p>
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

.block-icon {
  font-size: 32px !important;
  color: black;
}
</style>
