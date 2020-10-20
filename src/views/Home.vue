<template>
  <div class="p-5 home">
    <div class="flex">
      <div class="w-1/2 p-4 flex justify-center flex-col">
        <p class="text-3xl text-white">
          <span class="italic font-bold">Dua</span> means Tree or Plant.
        </p>
        <p class="text-3xl text-white">
          <span class="italic font-bold">Sua</span> means 'to learn'.
        </p>
        <p class="text-3xl text-white">
          “A passionate look, touch or a hug on a plant is enough to open your
          inner eyes than going for a serious yoga and other therapies”
        </p>
        <div class="inline-flex mt-5">
          <button
            class="btn bg-green-500 text-white shadow-sm hover:shadow-md px-3 py-2 rounded-md"
          >
            Explore plants
          </button>
          <button
            class="btn bg-white text-green-500 shadow-sm hover:shadow-md px-3 py-2 rounded-md ml-3"
          >
            See all plants
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
};
</script>

<style>
.home {
  background-image: url('../assets/images/pexels-cottonbro-4503273.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 87vh;
}
</style>
