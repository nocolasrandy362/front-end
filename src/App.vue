<script setup>
import { onMounted } from 'vue'
import WelcomeItem from './components/WelcomeItem.vue'
onMounted(()=>{
  console.log("test")
})
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <WelcomeItem/>
  </main>
</template>

<style scoped>
</style>
