<template>
  <div>
    <div class="m-4">
      <h3 class="text-2xl font-normal text-center">Explore new plants</h3>
    </div>
    <div class="flex flex-row m-4">
      <!-- A form for looking through the plants API -->
      <form class="shadow-sm rounded-md p-5 w-1/4 bg-white">
        <h4 class="font-semibold">Search our database</h4>
        <hr class="my-4" />

        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            for="commonname"
            >Common name</label
          >
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="commonname"
            placeholder
          />
        </div>
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            for="scientificname"
            >Scientific name</label
          >
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="scientificname"
            placeholder
          />
        </div>
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            for="genus"
            >Genus</label
          >
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="genus"
            placeholder
          />
        </div>
        <div class="w-full">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs mb-2"
            for="family"
            >Family</label
          >
          <input
            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="family"
            placeholder
          />
        </div>
        <div class="mt-5">
          <button
            class="btn w-full mt-4 block bg-green-500 text-white shadow-sm hover:shadow-md px-3 py-2 rounded-md"
          >
            Filter
          </button>
        </div>
      </form>
      <!-- A section to display the search results -->
      <div class="shadow-sm rounded-md p-5 w-3/4 bg-white ml-3">
        <div class="flex flex-row justify-between">
          <h2 class="font-semibold text-2xl text-green-500">
            Narrowleaf Plantain &bull;
            <span class="font-light italic">Plantago lanceolata</span>
          </h2>
          <h2 class="font-bold text-3xl text-gray-700">
            <span class="font-light text-xl">Year:</span>1752
          </h2>
        </div>
        <div class="flex flex-row mt-3">
          <img
            class="rounded-md w-64"
            src="https://bs.floristic.org/image/o/78a8374f009e6ed2dc71ca17d18e4271ea0a2a7b"
            alt
            srcset
          />
          <div class="pl-4">
            <div class="flex flex-row flex-wrap">
              <div class="m-3 w-64">
                <p class="font-light">Common name</p>
                <p class="font-normal text-xl">Narrowleaf Plantain</p>
              </div>
              <div class="m-3 w-64">
                <p class="font-light">Genus</p>
                <p class="font-normal text-xl">Plantago</p>
              </div>
              <div class="m-3 w-64">
                <p class="font-light">Family</p>
                <p class="font-normal text-xl">Plantaginaceae</p>
              </div>
              <div class="m-3 w-64">
                <p class="font-light">Rank</p>
                <p class="font-normal text-xl">Species</p>
              </div>
            </div>
            <div class="m-3">
              <p class="font-light">Related</p>
            </div>
            <div class="m-3">
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago byzantina</span
              >
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago hungarica</span
              >
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago linkii</span
              >
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago lanceolata var. minor</span
              >
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago ambigua</span
              >
              <span
                class="mr-2 mb-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700"
                >Plantago nutans</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  name: 'Explore',
  // components: {Autocomplete},
  // data: {
    
  // }
};
</script>
