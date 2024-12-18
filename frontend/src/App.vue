<template>
  <div class="main-container">
    <div class="heading-container">{{ apiItems.name }}</div>
    <button @click="fetchApiData">Fetch API Data</button>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  setup() {
    const apiItems = ref({});

    const fetchApiData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/data");

        apiItems.value = response.data;

      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    return {
      apiItems,
      fetchApiData,
    };
  },
};
</script>

<style scoped>
.heading-container {
  font-size: 24px;
  font-weight: 600;
  width: 100%;
  text-align: center;
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

}
</style>