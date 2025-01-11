<template>
  <div class="main-container">
    <div class="counter">{{ counter }}</div>
    <div class="heading-container">{{ appData.name }}</div>
    <button @click="counter++">Click Counter</button>
    <button @click="counter=0">Reset</button>
  </div>
</template>

<script setup>
import { onMounted, ref, inject } from "vue";

const appData = ref({});
const counter = ref(0);
appData.value = inject("appData");

</script>

<style scoped>
.heading-container {
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  text-align: center;
}

.counter {
  font-size: 48px;
  font-weight: 600;
}
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: 90vh;
  width: 100%;
}

button {
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 600;
  background-color: lightcoral;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  user-select: none;
}
</style>