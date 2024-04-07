<script setup lang="ts">
import { Toaster } from 'vue-sonner'

const styleVars = {
  '--select-label-font-size': '14px',
  '--field-decorator-placeholder-size': '14px',
  '--input-input-font-size': '14px',
  '--option-font-size': '10px',
  '--field-decorator-outlined-small-margin-top': '2px',
  '--field-decorator-outlined-small-margin-bottom': '2px',
}
</script>

<template>
  <toaster position="top-center"></toaster>
  <div class="custom-titlebar fixed top-0 left-0 right-0 h-30px z-1"></div>
  <var-style-provider :style-vars="styleVars">
    <router-view></router-view>
  </var-style-provider>
</template>

<style scoped>
.custom-titlebar {
  -webkit-app-region: drag;
  user-select: none;
}
</style>
