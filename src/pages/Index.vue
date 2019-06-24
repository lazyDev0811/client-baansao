<template>
  <Layout
    :displayPosts="true"
  >
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
          <div class="col-lg-12">
            <div class="content-block">

            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <a href="/classes" class="site-block-feature d-flex p-4 rounded mb-4">
              <div class="mr-3">
                <i class="material-icons block-icon">brush</i>
              </div>
              <div class="text">
                <h2 class="font-weight-bold text-black">Art Workshops</h2>
                <p>Check out our current classes!</p>
              </div>
            </a>
          </div>
          <div class="col-lg-4">
            <a href="/events" class="site-block-feature d-flex p-4 rounded mb-4">
              <div class="mr-3">
                <i class="material-icons block-icon">calendar_today</i>
              </div>
              <div class="text">
                <h2 class="font-weight-bold text-black">Class Schedules</h2>
                <p>View Summer 2019 Classes</p>
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
          <content-block-layout
            v-for="service in getServices()"
            :key="service.id"
            className="col-lg-6 col-md-6 mb-6 project-entry"
            :title="service.title"
            :description="service.summary"
            :link="service.link"
            linkText="Learn More"
            :image="service.image"
            imageAlt=""
          />
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
      title: 'Wilder than the Wind - Edmonton'
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
      }
    }
  }
</script>

<style>
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
