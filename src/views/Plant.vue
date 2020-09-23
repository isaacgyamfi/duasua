<template>
  <div class="shadow-sm rounded-md p-5 w-3/4 bg-white my-5 mx-auto">
    <div class="flex flex-row justify-between">
      <h2 class="font-semibold text-2xl text-green-500 capitalize">
        {{plant.main_species.common_name}} &bull;
        <span
          class="font-light italic"
        >{{plant.main_species.scientific_name}}</span>
      </h2>
      <h2 class="font-bold text-3xl text-gray-700">
        <span class="font-light text-xl">Year:</span>
        {{plant.year}}
      </h2>
    </div>
    <div class="flex flex-row mt-3">
      <img class="rounded-md w-64 h-64" :src="plant.main_species.image_url" alt srcset />
      <div class="pl-4">
        <div class="flex flex-row flex-wrap">
          <div class="m-3 w-64">
            <p class="font-light">Common name</p>
            <p class="font-normal text-xl capitalize">{{plant.main_species.common_name}}</p>
          </div>
          <div class="m-3 w-64">
            <p class="font-light">Scientific name</p>
            <p class="font-normal text-xl">{{plant.main_species.scientific_name}}</p>
          </div>
          <div class="m-3 w-64">
            <p class="font-light">Family</p>
            <p class="font-normal text-xl">{{plant.main_species.family}}</p>
          </div>
          <div class="m-3 w-64">
            <p class="font-light">Rank</p>
            <p class="font-normal text-xl">{{plant.main_species.rank}}</p>
          </div>
        </div>
        <div class="m-3">
          <p class="font-light">Related</p>
        </div>
        <div class="m-3">
          <span
            :key="synonym"
            v-for="synonym in plant.main_species.synonyms"
            class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
          >{{synonym.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Plant",
  data() {
    return {
      plantId: this.$route.params.id,
      plant: {},
    };
  },
  mounted: function () {
    this.getPlant();
  },
  methods: {
    async getPlant() {
      const { data } = await axios.get(
        `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants/${this.plantId}?token=${process.env.API_KEY}`
      );
      this.plant = data.data;
    },
  },
};
</script>

<style>
</style>