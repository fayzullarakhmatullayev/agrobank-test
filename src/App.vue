<template>
  <div class="app__page">
    <TheHeader />
    <div class="app__page--wrapper">
      <SideBlock />
      <main class="app__page--main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

import SideBlock from '@/components/SideBlock.vue'
import TheHeader from '@/components/TheHeader.vue'
</script>
