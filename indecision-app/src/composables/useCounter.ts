import { computed, ref } from "vue";

export const useCounter = (initialValue:number  = 0) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value ** 2);


  return { counter, squareCounter};
}
