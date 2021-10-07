<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="logo-wrapper">
          <router-link to="/" class="logo">Avangard Auto</router-link>
        </div>
        <TheNav />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheNav from '@/components/TheNav.vue'

export default defineComponent({
  components: { TheNav }
})
</script>


<style scoped>
  .header {
    background-color: black;
    color: whitesmoke;
  }
  .header__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    font-size: 28px;
    border-bottom: 2px solid;
  }

@media screen and (max-width: 882px) {
  .logo {
    font-size: 20px;
  }
}
@media screen and (max-width: 560px) {
  .logo-wrapper {
    display: block;
  }
  .header__content {
    flex-direction: column;
  }
}
@media screen and (max-width:560px){
  .logo-wrapper {
    margin-bottom: 10px;
  }
}
</style>