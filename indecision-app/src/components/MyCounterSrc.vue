<script  lang="ts" src="./MyCounterSrc.ts"></script>

<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>

    <div>
      <button @click="counter--">-1</button>
      <button @click="counter++">+1</button>
    </div>
  </section>
</template>
