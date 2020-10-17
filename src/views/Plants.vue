<template>
  <div class="container mb-5">
    <div class="m-4">
      <h3 class="text-2xl font-normal text-center">See all plants</h3>
    </div>
    <div>
      <div class="flex flex-row flex-wrap">
        <div
          v-if="loading"
          class="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto"
        >
          <div class="animate-pulse flex space-x-4">
            <div class="rounded bg-gray-400 h-12 w-12"></div>
            <div class="flex-1 space-y-4 py-1">
              <div class="h-4 bg-gray-400 rounded w-3/4"></div>
              <div class="space-y-2">
                <div class="h-4 bg-gray-400 rounded"></div>
                <div class="h-4 bg-gray-400 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
        <PlantCard
          v-else
          v-bind:plant="plant"
          v-for="plant in plants"
          v-bind:key="plant.id"
        />
      </div>
      <pagination/>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import PlantCard from '@/components/PlantCard.vue';
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Plants',
  components: {
    PlantCard, Pagination
  },
  data: function() {
    return {
      plants: [],
      loading: false,
    };
  },
  mounted() {
    this.getPlants();
  },
  methods: {
    async getPlants() {
      this.loading = true;
      try {
        const { data } = await axios.get(
          `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?token=${process.env.VUE_APP_API_KEY}`,
        );
        this.plants = data.data;
        console.log(this.plants.length);
        this.loading = false;
      } catch (error) {
        this.loading = false;
      }
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
