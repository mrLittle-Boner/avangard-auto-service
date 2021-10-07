<template>
  <div class="dropdown">
    <h3 class="dropdown__trigger" @click="toggleVisible">
      <span class="dropdown__title">{{ title }}</span>
      <span class="dropdown__btnstatus" :class="{'rotated': visible}">+</span>
    </h3>
    <ul class="dropdown__content" v-if="visible">
      <li class="dropdown__item" v-for="(item,index) in list" :key="index" > 
        <span class="dropdown__item-name">{{ item.name }}</span>
        <span class="dropdown__item-price">{{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue'
import Item from '@/types/singleItem'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    },
    list: {
      type: Array as PropType<Item[]>,
      required: true
    }
  },
  setup() {
    const visible = ref(false)
    const toggleVisible = () => visible.value = !visible.value
    
    return {
      toggleVisible,
      visible
    }
  }
})
</script>


<style scoped>
  .dropdown {
    margin-bottom: 20px;
  }
  .rotated {
    transform: rotate(45deg);
  }
  .dropdown__btnstatus {
    font-size: 40px;
    line-height: 0.7;
    font-weight: 500;
    border-radius: 50%;
    padding: 0 3px;
    border: 1px solid;
  }
  .dropdown__trigger {
    font-size: 28px;
    margin-bottom: 1px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    border: 1px solid grey;
    background-color: #f0efef;
    cursor: pointer;
  }
  .dropdown__content {
    font-size: 16px;
    padding: 10px 20px;
  }
  .dropdown__item {
    font-size: 20px;
    background-color: #f0efef;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    border: 1px solid;
    margin-bottom: 5px;
    padding: 5px 10px;
  }

  .dropdown__item-name {
    flex-grow: 1;
  }

  .dropdown__item-price {
    text-align: center;
    max-width: 140px;
  }

  @media screen and (max-width:545px){
    .dropdown__trigger {
      font-size: 20px;
    }
  }
  @media screen and (max-width:425px){
    .dropdown__content {
      padding:0;
      margin-top: 5px;
    }
  }
</style>