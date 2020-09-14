<template>
  <div class="bg-white m-2 shadow-md rounded-md" style="width: 410px;">
    <div class="flex flex-row">
      <div>
        <img
          class="object-cover rounded-l-md"
          style="width: 150px; height: 150px;"
          :src="plant.image_url"
        />
      </div>
      <div class="p-3">
        <p class="font-light">Common name</p>
        <p class="font-bold text-green-500 text-lg capitalize">
          {{ plant.common_name }}
        </p>
        <p class="font-light">Scientific name</p>
        <p class="font-medium">{{ plant.scientific_name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlantCard',
  props: {
    plant: Object,
  },
};
</script>

<style></style>
