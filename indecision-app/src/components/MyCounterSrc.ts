import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "MyCounterSrc",
  props: {
    value: Number
  },
  setup(props) {

    const counter = ref(props.value ?? 0);
    const squareCounter = computed(() => counter.value ** 2)

    return {
      counter,
      squareCounter
    }
  },
});
