<template>
  <div class="call__btn">
    <span class="call__icon" @click.self="toggleVisible">&#9742;</span>
    <div v-if="visible" class="call__phones-wrapper">
      <div class="triangle"></div>
      <div class="call__phones">
        <a class="call__phone" @click="closePop" href="tel:+79653104229">+7 (965) 310-42-29</a>
        <a class="call__phone" @click="closePop" href="tel:+74957773089">+7 (495) 777-30-89</a>
      </div>
    </div>
    <div v-if="visible" class="big-bg" @click="closePop"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)

    const toggleVisible = () => {
      visible.value = !visible.value
    }

    const closePop = () => {
      visible.value = false
    }

    return {
      visible,
      toggleVisible,
      closePop
    }
  },
})
</script>


<style scoped>
  .big-bg {
    position: fixed;
    top: 0;
    bottom: 0;    
    left: 0;
    right: 0;
    z-index: 1;
  }
  .call__btn {
    display: none;
    position: fixed;
    bottom: 15px;
    right: 15px;
    color: white;
    border-radius: 50%;
    background-color: green;
  }
  .call__icon {
    font-size: 45px;
    line-height: 1.3;
    padding: 5px 8px;
  }
  .call__phones {
    position: absolute;
    bottom: 78px;
    padding: 10px 20px;
    left: -199px;
    background-color: green;
    z-index: 5;
  }
  .call__phone {
    display: block;
    text-decoration: underline;
    padding: 5px 8px;
    font-size: 24px;
  }

  .triangle {
    position: absolute;
    bottom: 59px;
    width: 0;
    right: 10px;
    height: 0;
    border-style: inset;
    border-style: solid;
    border-width: 20px 20px 0 20px;
    border-color: green transparent transparent transparent;
    line-height: 0px;
    border-color: green transparent transparent transparent;
    -webkit-transform: rotate(360deg);
  }
  @media screen and (max-width: 435px)  {
    .call__btn {
      display: block;
    }
  }
</style>
