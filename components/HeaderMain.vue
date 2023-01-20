<template>
  <header class="header-top">
    <ul class="header-top-items">
      <!-- <BackArrow  /> -->
      <!--<h1>{{ headerTitle }}</h1>-->
      <!-- <li v-if="$route.path == '/'" class="back-arrow" @click="$router.go(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
      </li> -->



      <li>
        <NuxtLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/">
          <img src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-logo-horizontal-white.png?h=100"
            class="header-top-logo" />
          <!--   <img
          src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-agency-icon-large.png?fit=640%2C640&ssl=1"
          class="header-top-logo">-->
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        </NuxtLink>
      </li>

    </ul>
  </header>
</template>


<style>
  .main {
    position: relative;
  }

  @media screen and (min-width: 768px) {
    .header-top {
      display: none !important;
    }
  }


  .header-top {
    height: 72px;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: black;
  }

  .header-top-items {
    height: 100%;
    width: 100%;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }


  .header-top-logo {
    height: 24px;
  }

  .header-top svg {
    color: white;
  }

  .header-top-items svg {
    height: 28px;
  }
</style>

<script setup>
  const {
    headerTitle
  } = defineProps(['headerTitle'])
</script>