<template>
  <TheHeader />
  <router-view/>
  <ACall />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ACall from '@/components/ACall.vue'

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
    ACall
  }
})
</script>


<style>
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: inherit;
}
section {
  padding: 20px 0;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  scroll-behavior: smooth;
}
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 10px;
}
.heading {
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
}
</style>
