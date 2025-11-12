<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="counterIncrement">+1</button>
      <button @click="counterDecrement">-1</button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
interface Props {
  value: number;
}
const props = defineProps<Props>();
const counter = ref(props.value);
const squareCounter = computed(() => counter.value * counter.value);
const counterIncrement = () => {
  counter.value++;
};
const counterDecrement = () => {
  counter.value--;
};
</script>
