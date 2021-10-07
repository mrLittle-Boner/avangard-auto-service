<template>
  <AWashServices />
  <AWashPrice />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AWashServices from '@/components/AWashServices.vue'
import AWashPrice from '@/components/AWashPrice.vue'

export default defineComponent({
  components: { 
    AWashServices,
    AWashPrice,
  }
})
</script>
