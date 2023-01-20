<script setup>
    // https://fjolt.com/article/vue-reusable-tabs
    import {
        ref,
        onMounted,
        reactive
    } from 'vue';
    const props = defineProps(['customClass']);
    let tabContainer = ref(null);
    let tabHeaders = ref(null);
    let tabs = ref(null);
    let activeTabIndex = ref(0);

    onMounted(() => {
        tabs.value = [...tabContainer.value.querySelectorAll('.tab')];
        for (let x of tabs.value) {
            if (x.classList.contains('active')) {
                activeTabIndex = tabs.value.indexOf(x);
            }
        }
    })
    const changeTab = (index) => {
        activeTabIndex = index;
        for (let x of [...tabs.value, ...tabHeaders.value]) {
            x.classList.remove('active')
        }
        tabs.value[activeTabIndex].classList.add('active')
        tabHeaders.value[activeTabIndex].classList.add('active')
    }
</script>

<template>
    <div id="tabs-container" :class="customClass" ref="tabContainer">
        <div id="tab-headers">
            <ul>
                <!-- this shows all of the titles -->
                <li v-for="(tab, index) in tabs" :key="index" :class="activeTabIndex == index ? 'active' : ''"
                    @click="changeTab(index)" ref="tabHeaders">
                    <span v-html="tab.title"></span></li>
            </ul>
        </div>
        <!-- this is where the tabs go, in this slot -->
        <div id="active-tab">
            <slot></slot>
        </div>
    </div>
</template>

<style>
    #tab-headers ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid #111;
        margin-bottom: 10px;
        text-align: center;
        height:50px;
    }

    #tab-headers ul li {
        list-style: none;
        position: relative;
        cursor: pointer;
        color: white;
        flex: 1;
        margin:0 5px;
    }

    #tab-headers ul li.active:after {
    content: '';
    position: absolute;
    bottom: -11px;
    left: 0;
    height: 1px;
    width: 100%;
    background: linear-gradient(#9f6cff 0,#9f6cff 10%,#ff0aaa 75%,#ff6ccc 100%);
  }


    #tab-headers ul svg {
        height: 26px;
        opacity: 0.33;
    }


    #tab-headers ul li.active svg {
        color: white;
        opacity: 1;
    }


    #tab-headers ul li.active {
        color: #008438;
        font-weight: bold;
    }

    #active-tab,
    #tab-headers {
        width: 100%;
    }


    /*   
  #active-tab {
    padding: 0.75rem;
  } */
</style>