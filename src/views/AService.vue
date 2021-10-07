<template>
  <section class="service">
    <div class="container">
      <div class="service__content">
        <h2 class="heading">Услуги Автосервиса</h2>
        <ADropdown title="Техническое обслуживание" :list="maintenance" />
        <ADropdown title="Тормозная система" :list="brakeSystem" />
        <ADropdown title="Электрооборудование" :list="electrical" />
        <ADropdown title="Ходовая часть" :list="chassis" />
        <ADropdown title="Рулевое управление" :list="steering" />
        <ADropdown title="Двигатель" :list="engine" />
        <ADropdown title="Коробка передач" :list="transmission" />
        <ADropdown title="Выхлопная система" :list="exhaust" />
        <ADropdown title="Охлаждение, Обогрев" :list="heater" />
        <ADropdown title="Система кондиционирования" :list="airConditioner" />
        <ADropdown title="Малярные и кузовные работы" :list="bodyWork" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ADropdown from '@/components/ADropdown.vue'
import { bodyWork,
  airConditioner,
  heater,
  exhaust,
  transmission,
  engine,
  steering,
  chassis,
  electrical,
  maintenance,
  brakeSystem } from '@/assets/data/prices'

export default defineComponent({
  components: { ADropdown },
  setup() {
    return { 
      bodyWork,
      airConditioner,
      heater,
      exhaust,
      transmission,
      engine,
      steering,
      chassis,
      electrical,
      maintenance,
      brakeSystem
    }
  }
})
</script>


<style>
.service {
  min-height: 400px;
}
</style>