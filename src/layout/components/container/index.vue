<script lang="ts" setup></script>
<template>
  <div class="pt-30px w-full h-screen bg-#f2f2f2">
    <router-view v-slot="{ Component }">
      <transition
        name="move"
        mode="out-in"
      >
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
