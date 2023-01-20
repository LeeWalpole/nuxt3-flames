<template>
    <h1>Carousel Comp</h1>

     <swiper :modules="[Navigation, Pagination]"  navigation :pagination="{dynamicBullets: true,}" class="mySwiper" :slides-per-view="1" :space-between="0"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange">
       <swiper-slide>Slide 1</swiper-slide><swiper-slide>Slide 2</swiper-slide
       ><swiper-slide>Slide 3</swiper-slide><swiper-slide>Slide 4</swiper-slide
       ><swiper-slide>Slide 5</swiper-slide><swiper-slide>Slide 6</swiper-slide
       ><swiper-slide>Slide 7</swiper-slide><swiper-slide>Slide 8</swiper-slide
       ><swiper-slide>Slide 9</swiper-slide>
     </swiper>
   </template>
   <script>
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from "swiper/vue";
   
   // Import Swiper styles
   import "swiper/css";
   
   import "swiper/css/pagination";
   import "swiper/css/navigation";
   
   
   
   // import required modules
   import { Navigation, Pagination, Ally } from "swiper";
   
   export default {
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
   </script>