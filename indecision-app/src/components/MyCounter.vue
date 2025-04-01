<script setup lang="ts">
import { useCounter } from '@/composables/useCounter'

const props = defineProps({
  value: Number,
})

const { counter, squareCounter } = useCounter(10)
</script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button class="btn" @click="counter--">-1</button>
      <button class="btn" @click="counter++">+1</button>
    </div>
  </section>
</template>

<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded mr-2 hover:bg-blue-600;
}
</style>
