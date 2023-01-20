<template>
  <div>
    <div id="app" class="app">
      <SideLeft />
      <div class="main">
        <slot />
        <NavBottom />
      </div>
    </div>
    <div id="modals"></div>
  </div>
</template>