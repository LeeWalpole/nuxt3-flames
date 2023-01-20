<template>
<div class="grid-3">
    <div v-for="item in profile.gallery" :key="item.url_thumbnail">
      <figure class="grid-item grid-item-4x5">
        <img :src="item.url_thumbnail" :placeholder="15" :alt="item.alt" />
      </figure>
    </div>
  </div>
</template>