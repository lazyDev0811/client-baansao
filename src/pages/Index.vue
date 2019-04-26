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

    <div class="site-section">
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

    <div class="site-section">
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
              <a
                href="contact.html"
                class="btn btn-primary btn-lg rounded-0"
                margin-top="20px"
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
              <a href="contact.html" class="btn btn-primary btn-lg rounded-0"
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
              <a href="contact.html" class="btn btn-primary btn-lg rounded-0"
                >Learn More</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container pt-4">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="img">
              <img src="/images/oceanbeach.jpg" alt="Ocean Beach Art" class="img-fluid brush-04">
            </div>
          </div>
          <div class="col-lg-5 ml-auto">
            <!-- Leave this in here useful for modal display -->
            <!--<span class="sub-title">What Types of Classes Do We Offer?</span>
            <h2 class="font-weight-bold text-black mb-5">Popular Art Workshops:</h2>-->
            <div class="accordion" id="accordionExample">

              <h2 class="mb-0 border rounded mb-2">
                <button class="btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  1. Ink, Resins, and Crystals Art
                </button>
              </h2>

              <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div class="card-body">
                  <p>Escape into the world of <a href="https://www.facebook.com/events/1951925708450518/">glassy resin, crystals and semi precious stones</a> such as Jasper, Turquoise, hematite, quartz, and more. In this 3-hour art escape, we discover how to create a vivid abstract alcohol-ink painting on a birch panel – with glitter, semi precious stones and crystals adding to the effects. We will also learn how to use resin on paintings (requiring a 12-hour cure time, to be picked up a later time). No prior experience needed, and all materials (including your choice of many crystals will be provided), and a handout will be emailed to you so you can replicate the techniques we practiced.</p>
                </div>
              </div>

              <h2 class="mb-0 border rounded mb-2">
                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  2. Edgy Abstracts Art
                </button>
              </h2>

              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div class="card-body">
                  <p>We will be “living on the edge” as we delve into a world of <a href="https://www.facebook.com/events/2272133276332998/">industrial, graffiti type painting</a>. This is an exciting class where you get to immerse yourself into creative places you haven’t explored before. We will use various fluid mediums to create some really cool paintings that will not only be rebellious but will be exciting and beautiful to look at.</p>
                </div>
              </div>

              <h2 class="mb-0 border rounded mb-2">
                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  3. Birch Trees Art Escape
                </button>
              </h2>

              <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div class="card-body">
                  <p>In this art escape, we discover how to <a href="https://www.facebook.com/events/654900431606115/">paint a birch treeline</a> with a background on yupo paper mounted to a 9x12 birch panel. Time permitting, we also do some additional intuitive fluid painting on tiles as a bonus. You will receive lots of instruction, but will choose your own colours for the sky and leaves and any changes you desire.</p>
                </div>
              </div>

              <h2 class="mb-0 border rounded mb-2">
                <button class="btn collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  4. Ocean in Resin Art Escape
                </button>
              </h2>

              <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div class="card-body">
                  <p>In this three hour art escape, we will <a href="https://www.facebook.com/events/258024471751180/">paint a cross section of the ocean</a>. Your water will have dimension and colour, foam and movement. We will also paint an art tile to have some reference to alcohol inks.</p>
                </div>
              </div>

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
</style>
