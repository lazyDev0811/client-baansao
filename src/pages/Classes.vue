<template>
  <Layout>
    <div
      class="site-blocks-cover overlay inner-page hero-mask"
      style="background-image: url(/images/class-samples/IMG_6005.jpg);"
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

    <div class="site-section" v-if="getServices().length > 0">
      <div class="container">
        <div class="row">
          <content-block-layout
            v-for="service in getServices()"
            :key="service.id"
            className="col-lg-6 col-md-6 mb-6 project-entry"
            :title="service.title"
            :description="service.summary"
            link="/classes"
            linkText="More Details"
            :onLinkClicked="setActiveService.bind(this, getServices().indexOf(service))"
            :image="service.image"
            imageAlt=""
          />
        </div>
      </div>
    </div>

    <div class="site-section" v-if="activeService" :key="activeService.id">
      <div class="container pt-4" ref="classDetails">
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-11 ml-auto text-center">
            <span class="sub-title" v-html="activeService.summary"></span>
            <h2 class="font-weight-bold text-black mb-5" v-html="activeService.title"></h2>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-4">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="img">
              <img :src="activeService.image" :alt="activeService.caption" class="img-fluid brush-04">
            </div>
          </div>
          <div class="col-lg-5 ml-auto">
            <p v-html="activeService.description"></p>
            <p class="class-action-buttons mt-5">
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
          <div class="owl-content-wrapper">
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/reannin_sirianni.jpg" alt="Image" class="img-fluid">
                <h3>Lisa C.</h3>
                <span class="sub-title"></span>
                <p>“<em>Stephanie’s class was super relaxed and super fun. We learned new techniques and new products and were able to make 2 beautiful pieces to take home. I loved the instruction and the freedom with which we could pick our own colours and embellishments. I will definitely be back!</em>”</p>
              </div>
            </div>
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/nellie_thompson.jpg" alt="Image" class="img-fluid">
                <h3>Linda C.</h3>
                <span class="sub-title"></span>
                <p>“<em>Registered in the Inks, Resin, Crystals, Stones and Glitter Art Escape. Stephanie was a fabulous instructor. She was welcoming, patient and inspiring. I was very happy with my painting and the experience. Would absolutely take another Wilder Than the Wind Creations class!</em>”</p>
              </div>
            </div>
            <div class="owl-item active" style="width: 380px;">
              <div class="testimony">
                <img src="/images/julie_d_king.jpg" alt="Image" class="img-fluid">
                <h3>Reannin S.</h3>
                <span class="sub-title"></span>
                <p>“<em>I recently took an art class here. It was ridiculously amazing. I had so much fun! I felt like a little kid creating my artwork. Stephanie is such an awesome teacher she teaches you many practical techniques but also gives you plenty of time to play around make a mess and encourages you to have fun. Stephanie’s energy is fabulous!</em>”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
  import ContentBlockLayout from '~/components/layouts/ContentBlockLayout.vue';

  // Import static data
  import ServiceData from '~/data/Services.yml';

  export default {
    components: {
      ContentBlockLayout,
    },
    metaInfo: {
      title: "Classes"
    },
    data() {
      return {
        activeService: null,
        displayBookingForm: false,
        displayQuestionForm: false
      }
    },
    computed: {
      serviceContent() {
        return ServiceData;
      }
    },
    methods: {
      getServices() {
        return (this.serviceContent.services instanceof Array) ? this.serviceContent.services : [];
      },
      getService(idx) {
        let items = this.serviceContent.services;

        if (items instanceof Array && items.length > idx) {
          return items[idx];
        }

        return null
      },
      setActiveService(idx) {
        this.activeService = this.getService(idx);
        // Hide Booking / Question forms as they are only relevant to the selected class
        this.hideBookingForm();
        this.hideQuestionForm();

        if (typeof window !== 'undefined') {
          window.setTimeout(() => {
            this.$refs.classDetails.scrollIntoView();
          }, 333);
        }
      },
      unsetActiveService() {
        this.activeService = null;
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

<style>
  .class-action-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .class-action-buttons > * {
    flex: 1;
  }

  .owl-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 768px) {
    .owl-content-wrapper {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
    }
  }

  @media screen and (min-width: 1280px) {
    .class-action-buttons {
      display: block;
    }
  }

  .project-entry {
    text-align: center;
  }

  .project-entry .img-fluid {
    height: 40vh;
  }

  @media screen and (min-width: 1280px) {
    .project-entry .img-fluid {
      height: 50vh;
    }
  }

  .post-entry {
    text-align: center;
  }

  .post-entry .img-fluid {
    height: 30vh;
  }

  @media screen and (min-width: 1280px) {
    .post-entry .img-fluid {
      height: 40vh;
    }
  }
</style>
