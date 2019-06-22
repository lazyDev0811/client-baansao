<template>
  <div v-bind:class="classNameString">
    <img v-bind:src="this.image" alt="Image" class="img-fluid">
    <h3>{{ this.reviewedBy }}</h3>
    <span class="sub-title"></span>
    <p>“<em v-html="this.testimonial"></em>”</p>
  </div>
</template>

<script>
export default {
  // TODO: Supply models via props??
  props: {
    className: {
      type: String,
      default: null
    },
    flipLayout: {
      type: Boolean,
      default: false,
    },
    testimonial: {
      type: String,
      default: '',
    },
    reviewedBy: {
      type: String,
      default: '',
    },
    position: {
      type: String,
      default: '',
    },
    organization: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
    linkText: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNameString() {
      return (typeof this.className === 'string' && this.className.length > 0) ? `${this.className}` : '';
    }
  }
};
</script>


<style>
  .testimonial-profile-circle {
    width: 50%;
  }
</style>
