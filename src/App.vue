<script setup lang="ts"></script>

<template>
  <div class="custom-titlebar fixed top-0 left-0 right-0 h-30px z-1"></div>
  <router-view></router-view>
</template>

<style scoped>
.custom-titlebar {
  -webkit-app-region: drag;
  user-select: none;
}
</style>
