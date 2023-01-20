<template>

<ul class="feed-item-icons">


    <li class="feed-item-icon" @click="toggleModal2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

    </li>

</ul>



  <teleport v-if="showModal" to="#modals">
    <div v-if="showModal">
      <Popup popupTitle="Popup Title 1" popupText="Popup 1 text" theme="theme2" @close="toggleModal">
        <h1>H1</h1>
        <div class="buttons">
            <a href="">Button</a>
        </div>
      </Popup>
    </div>
  </teleport>

  
  <!-- Save Favorite -->
  <teleport v-if="showModal2" to="#modals">
    <div v-if="showModal2">
      <Popup popupTitle="Coming Soon" popupText="You will be able to save your favorite models very soon." theme="theme2" @close="toggleModal2">
        <aside>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

        </aside>
        <h1>H1</h1>
        <div class="buttons">
            <a href="">Button</a>
        </div>
      </Popup>
    </div>
  </teleport>

  <teleport v-if="showModal3" to="#modals">
    <div v-if="showModal3">
      <Popup popupTitle="Popup Title 2" popupText="Popup 1 text" theme="theme2" @close="toggleModal3">
        <h1>3333</h1>
        <div class="buttons">
            <a href="">Button</a>
        </div>
      </Popup>
    </div>
  </teleport>
  

</template>


<script>

  import Popup from '/components/Popup.vue'
  export default {
    data() {
      return {
        showModal: false,
        showModal2: false,
        showModal3: false
      }
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal
      },
      toggleModal2() {
        this.showModal2 = !this.showModal2
      },
      toggleModal3() {
        this.showModal3 = !this.showModal3
      }
    },

  }
</script>