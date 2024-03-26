<script lang="ts" setup>
import vSidebar from './components/sidebar/index.vue'
import vContainer from './components/container/index.vue'
</script>
<template>
  <var-row>
    <var-col :span="2">
      <v-sidebar></v-sidebar>
    </var-col>
    <var-col :span="22">
      <v-container></v-container>
    </var-col>
  </var-row>
</template>
