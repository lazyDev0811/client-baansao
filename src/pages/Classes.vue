<template>
  <Layout>
    <div
      class="site-blocks-cover overlay inner-page hero-mask"
      style="background-image: url(/images/oceanbeach2.jpg); background-position: -30%;"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-10">
            <span class="sub-text"></span>
            <h1>Classes, Courses, and Escapes</h1>
          </div>
        </div>
      </div>
    </div>

    <div class="site-section">
      <div class="container">
        <div class="row">
          <content-block-layout
            className="col-lg-4 col-md-6 mb-4 project-entry"
            title="Ink, Resin and Crystals Art Escape"
            description="Escape into the world of glassy resin, crystals and semi precious stones."
            link="/classes"
            linkText="More Details"
            :onLinkClicked="setActiveClass"
            image="/images/inks_resin_crystal_glitter.jpg"
            imageAlt=""
          />
          <content-block-layout
            className="col-lg-4 col-md-6 mb-4 project-entry"
            title="Ocean in Resin Painting"
            description="In this three hour art escape, we will paint a cross section of the ocean."
            link="/classes"
            linkText="More Details"
            :onLinkClicked="setActiveClass"
            image="/images/oceanbeach.jpg"
            imageAlt=""
          />
          <content-block-layout
            className="col-lg-4 col-md-6 mb-4 project-entry"
            title="Edgy Abstracts Art Escape"
            description="We will be “living on the edge” as we delve into a world of industrial, graffiti type painting."
            link="/classes"
            linkText="More Details"
            :onLinkClicked="setActiveClass"
            image="/images/edgy_abstract.jpg"
            imageAlt=""
          />
        </div>
      </div>
    </div>

    <!--
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
        stones such as Jasper, Turquoise, hematite, quartz, and more. In
        this three hour art escape, we will learn how to create a vivid
        abstract alcohol ink painting on a birch panel, with glitter, semi
        precious stones and crystals adding to the effects. We will learn
        how to use resin on paintings, however your piece will have to be
        picked up the next day or later (12 hour cure time). Experience is
        not necessary, and all materials plus many choices of crystals
        will be provided, and a handout will be emailed to you so you can
        replicate the techniques we practiced. $95 per person. Centrally
        located in Edmonton! Please message this account to register for
        the art escape.
      </p>
      <p>
        <a
          href="/contact"
          class="btn btn-primary btn-lg rounded-0"
          margin-top="20px"
          >Book this Class</a
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
        the ocean. Your water will have dimension and colour, foam and
        movement. We will also paint an art tile to have some reference to
        alcohol inks. Depending on your choice, the painting will measure
        12X16 and the serving board will be 9X12. Cost for the three hour
        workshop is $85 for the cutting board and $95 for the ocean art..
        Your piece will have to be picked up at a later date, as it takes
        overnight to dry. These classes fill up quickly due to the small
        class size required. Please message on facebook to sign up.
        Centrally located in Edmonton!
      </p>
      <p>
        <a href="/contact" class="btn btn-primary btn-lg rounded-0"
          >Book this Class</a
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
        industrial, graffiti type painting. This is an exciting class
        where you get to immerse yourself into creative places you haven’t
        explored before. We will use various fluid mediums to create some
        really cool paintings that will not only be rebellious but will be
        exciting and beautiful to look at. You will paint at least 1
        painting on 10X12 yupo paper. $85 per person, no experience
        necessary – this is one three hour class. Please message me to
        enquire about taking this course! Other dates are available on my
        events tab on Facebook. Centrally located in Edmonton!
      </p>
      <p>
        <a href="/contact" class="btn btn-primary btn-lg rounded-0"
          >Book this Class</a
        >
      </p>
    </div>-->

    <div class="site-section" v-if="activeClass">
      <div class="container pt-4" ref="classDetails">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-11 ml-auto text-center">
            <span class="sub-title">Escape into the world of glassy resin, crystals and stones</span>
            <h2 class="font-weight-bold text-black mb-5">Ink, Resins, and Crystals Art Escape</h2>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="img">
              <img src="/images/oceanbeach.jpg" alt="Ocean Beach Art" class="img-fluid brush-04">
            </div>
          </div>
          <div class="col-lg-5 ml-auto">
            <p>Escape into the world of <a href="https://www.facebook.com/events/1951925708450518/">glassy resin, crystals and semi precious stones</a> such as Jasper, Turquoise, hematite, quartz, and more. In this 3-hour art escape, we discover how to create a vivid abstract alcohol-ink painting on a birch panel – with glitter, semi precious stones and crystals adding to the effects. We will also learn how to use resin on paintings (requiring a 12-hour cure time, to be picked up a later time). No prior experience needed, and all materials (including your choice of many crystals will be provided), and a handout will be emailed to you so you can replicate the techniques we practiced.</p>
            <p class="mt-5">
              <button class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">calendar_today</i> Book this Class</button>&nbsp;
              <button @click="showQuestionForm" class="btn btn-secondary btn-lg rounded-0"><i class="material-icons">question_answer</i> Ask a Question</button>
            </p>
          </div>
        </div>
      </div>

      <div class="container pt-4" v-if="displayQuestionForm" ref="questionForm">
        <div class="row">
          <div class="col-12 text-center">
            <span class="sub-title">Ink, Resins, and Crystals Art Escape</span>
            <h2 class="font-weight-bold text-black mb-5">Have a Question? I'm Here to Help!</h2>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-md-12 col-lg-12">
            <form
              action="https://formspree.io/admin@firebrandwebsolutions.com"
              method="POST"
              class="p-5 bg-white"
            >
              <div class="row form-group">
                <div class="col-md-12 mb-3 mb-md-0">
                  <label class="font-weight-bold" for="fullname"
                  >Full Name</label
                  >
                  <input
                    type="text"
                    id="fullname"
                    class="form-control"
                    placeholder="Full Name"
                  />
                </div>
              </div>
              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    class="form-control"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <label class="font-weight-bold" for="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Write your message here."
                  ></textarea>
                </div>
              </div>

              <div class="row form-group">
                <div class="col-md-12">
                  <input
                    type="submit"
                    value="Send"
                    class="btn btn-primary rounded-0 btn-lg"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 text-center">
          <span class="sub-title">Testimonials from our</span>
          <h2 class="font-weight-bold text-black mb-5">Happy Students</h2>
        </div>
      </div>
      <div class="nonloop-block-13 owl-carousel owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <carousel style="display: flex; align-items: flex-start; justify-content: center">
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/reannin_sirianni.jpg" alt="Image" class="img-fluid">
                <h3>Reannin Sirianni</h3>
                <span class="sub-title"></span>
                <p>“<em>I recently took an art class here. It was ridiculously amazing. I had so much fun! I loved it!! I will definitely be back!</em>”</p>
              </div>
            </div>
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/nellie_thompson.jpg" alt="Image" class="img-fluid">
                <h3>Nellie Thompson</h3>
                <span class="sub-title"></span>
                <p>“<em>I met Stephanie at a market and loved her creations. Took the flowers and landscape class. Loved it and can’t wait to take more.</em>”</p>
              </div>
            </div>
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/julie_d_king.jpg" alt="Image" class="img-fluid">
                <h3>Julie D. King</h3>
                <span class="sub-title"></span>
                <p>“<em>Attended the Inks, Resin, Crystals, Stones, and Glitter class and loved it. Stephanie is knowledgeable, very nice and super accommodating. I have already signed up for another class.</em>”</p>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  export default {
    components: {
      ContentBlockLayout,
    },
    metaInfo: {
      title: "Classes"
    },
    data() {
      return {
        activeClass: false,
        displayBookingForm: false,
        displayQuestionForm: false
      }
    },
    mounted() {
    },
    methods: {
      setActiveClass(classModel) {
        this.activeClass = true;
        // Hide Booking / Question forms as they are only relevant to the selected class
        this.hideBookingForm();
        this.hideQuestionForm();

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            this.$refs.classDetails.scrollIntoView();
          }, 333);
        }
      },
      unsetActiveClass() {
        this.activeClass = null;
      },
      showBookingForm() {
        this.displayBookingForm = true;
      },
      hideBookingForm() {
        this.displayBookingForm = null;
      },
      showQuestionForm() {
        this.displayQuestionForm = true;

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            this.$refs.questionForm.scrollIntoView();
          }, 333);
        }
      },
      hideQuestionForm() {
        this.displayQuestionForm = null;
      }
    }
  }
</script>
