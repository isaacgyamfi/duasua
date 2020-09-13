<template>
  <div class="container">
    <div>
      <c-flex direction="row" wrap="wrap">
        <PlantCard
          v-bind:plant="plant"
          v-for="plant in plants"
          v-bind:key="plant.id"
        />
      </c-flex>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import PlantCard from '@/components/PlantCard.vue';
export default {
  name: 'Plants',
  components: {
    PlantCard,
  },
  data: function() {
    return {
      plants: [],
    };
  },
  beforeMount() {
    this.getPlants();
  },
  methods: {
    async getPlants() {
      const { data } = await axios.get(
        'https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=V7kaFDB9DY1LewlI_2bAECYP-7auchLN7w-lEiT0HHk',
      );
      this.plants = data.data;
      console.log(this.plants.length);
    },
  },
};
</script>

<style>
.container {
  margin: auto;
  width: 90%;
}
</style>
