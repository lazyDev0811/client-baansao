<template>
  <div v-bind:class="classNameString">
    <a href="#" class="d-block figure">
      <img
        :src="this.image"
        alt="Image"
        class="img-fluid brush-01"
      />
    </a>
    <p v-if="typeof this.datePublished === 'string' && this.datePublished.length > 0" class="text-muted">{{ this.datePublished }}</p>
    <h3 class="mb-0">
      <a href="#">{{ this.title }}</a>
    </h3>
    <br />
    <p class="text-muted" v-html="compiledDescription"></p>
    <p v-if="typeof this.linkText === 'string' && this.linkText.length > 0">
      <a v-bind:href="this.link" v-bind:aria-label="this.linkText" class="btn btn-art-class btn-lg rounded-0"><i class="material-icons block-icon">brush</i> {{ this.linkText }}</a>
    </p>
  </div>
</template>

<script>
import ContentBlock from './ContentBlock';

export default ContentBlock;
</script>
