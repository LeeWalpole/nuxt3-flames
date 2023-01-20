<template>
    <div v-if="!profiles.length"><!-- Display "loading...." whilst posts are waiting to be fetched... -->
        <section>
            Loading...
        </section>
    </div>
  
    <div v-else>
  
        <section class="feed-item" v-for="profile in profiles" :key="profile.slug">
  
            <swiper :modules="[Keyboard, Lazy, Pagination, Navigation]" :slidesPerView="1" :lazy="true"
                slidesPerView='2' :keyboard="{
  enabled: false,
  }" :pagination="{
  clickable: true,
  }" :navigation="true" class="mySwiper">
                <swiper-slide v-for="item in profile.gallery" :key="item.url_thumbnail">
                    <figure class="lw-carousel">
                        <img :data-src="item.url_thumbnail" :alt="item.alt" class="swiper-lazy">
                        <div class="swiper-lazy-preloader"></div>
                    </figure>
                </swiper-slide>
            </swiper>
  
            <FeedHeader :profile="profile">
            </FeedHeader>
  
        </section>
  
    </div>
  
  
  </template>
  
  
  <script setup>
    import {
        ref
    } from 'vue'
    import {
        Swiper,
        SwiperSlide
    } from "swiper/vue";
  
    // Import Swiper styles
    import "swiper/css";
    import "swiper/css/lazy";
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import "swiper/css/keyboard";
  
    // import required modules
    // Import Swiper Vue.js components
    import {
        Keyboard,
        Lazy,
        Pagination,
        Navigation
    } from "swiper";
  
  
    const profiles = ref([])
    const error = ref(null)
  
    const load = async () => {
        try {
            // https://www.flames.agency/api/profiles.json
            let data = await fetch("http://localhost:10009/wp-json/data/v1/profiles/")
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profiles.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }
    load()
  </script>
  




  <style scoped>
    #app {
        height: 100%
    }
  
    .swiper {
        width: 100%;
        height: 100%;
  
    }
  
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        background: #000;
  
  
    }
  
    .swiper-slide {
        width: 100%;
        aspect-ratio: 4 / 5;
        object-fit: cover;
        border: none !important;
    }
  
    .lw-carousel {
        width: 100%;
        height: 100%;
  
    }
  
    .swiper-lazy-preloader {}
  
  
    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  </style>