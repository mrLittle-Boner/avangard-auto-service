<template>
  <nav>
    <ul class="list">
      <router-link class="item link" to="/"><span>О Нас</span></router-link>
      <router-link class="item link" to="/service"><span>Сервис</span></router-link>
      <router-link class="item link" to="/wash"><span>Мойка</span></router-link>
      <router-link class="item link" to="/diagnostic"><span>Диагностика</span></router-link>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ 
})
</script>


<style scoped>
  .list {
    display: flex;
    gap: 15px;
  }
  .item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70px;
  }
  .link {
    font-size: 20px;
    display: flex;
    align-items: center;
    padding: 0 15px;
  }
  .router-link-exact-active {
    background-color: white;
    color: black;
  }
@media screen and (max-width: 865px) {
  .item {
    height: 55px;
  }
  .link {
    font-size: 18px;
  }
  .list {
    gap: 0px;
  }
}
@media screen and (max-width:560px){
  nav {
    order: 1;
  }
}
@media screen and (max-width: 435px) {
  .list {
    flex-direction: column;
  }
  .router-link-exact-active {
    order: 1;
  }
  .link {
    height: 40px;
  }
}
</style>