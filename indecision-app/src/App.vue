<script setup lang="ts">
import MyCounter from './components/MyCounter.vue';
import MyCounterSrc from './components/MyCounterSrc.vue';

</script>

<template>
  <h1 className="text-3xl font-bold underline">
      Hello world!
  </h1>
  <hr>
  <MyCounter :value="1" />
  <MyCounterSrc :value="2" />
</template>
