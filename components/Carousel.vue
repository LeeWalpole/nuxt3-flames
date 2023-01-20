<template>
 <h1>Carousel Comp</h1>
 <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide class="carousel-cell" v-for="profile in profile.gallery" :key="profile.url_thumbnail">
        <figure class="carousel-feature">
            <img :src="profile.url_thumbnail" :alt="profile.alt">
        </figure>
    </swiper-slide>
  </swiper>




</template>
<script>
// Import Swiper Vue.js components // https://swiperjs.com/vue#usage
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";



// import required modules
import { Pagination } from "swiper";

export default {

  props: {
    items: {
      type: Array,
      required: true
    },
    options: {
      type: Object,
      default: () => {}
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};


const {
        data: profile
    } = await useFetch('http://192.168.1.105:10009/wp-json/data/v1/profiles/profile-1')

</script>

