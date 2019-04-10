// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/assets/scss/style.scss'

import '~/assets/css/style.css'
import '~/assets/css/jquery-ui.css'
import '~/assets/css/magnific-popup.css'
import '~/assets/fonts/icomoon/style.css'

import AOS from "aos";
import "~/assets/css/aos.css";
AOS.init();

import carousel from 'vue-owl-carousel'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component(carousel)

  head.script.push({ src: '/assets/js/bootstrap-datepicker.js' })
  head.script.push({ src: '/assets/js/bootstrap.min.js' })
  head.script.push({ src: '/assets/js/jquery-3.3.1.min.js' })
  head.script.push({ src: '/assets/js/jquery-migrate-3.0.1.min.js' })
  head.script.push({ src: '/assets/js/jquery-ui.js' })
  head.script.push({ src: '/assets/js/jquery.countdown.min.js' })
  head.script.push({ src: '/assets/js/jquery.magnific-popup.min.js' })
  head.script.push({ src: '/assets/js/jquery.stellar.min.js' })
  //head.script.push({ src: '/assets/js/main.js' })
  head.script.push({ src: '/assets/js/popper.min.js' })
  head.script.push({ src: '/assets/js/slick.min.js' })

}
