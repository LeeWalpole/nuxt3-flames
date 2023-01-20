<template>
  <div>
    <!-- Homepage Feed Below -->
    <HeaderMain headerTitle="Favorites" />
    <Feed /><!-- /components/Feed - Fetches data from a local API (http://localhost:10009/wp-json/data/v1/profiles/) -->
    <!-- To do: Save the JSON somewhere I can access in Nuxt -->
    <NavBottom />
  </div>
</template>



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


.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>