<template>
  <nav class="flex items-center justify-between flex-wrap bg-green-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link to="/" class="font-semibold text-2xl tracking-tight">Duasua</router-link>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <router-link
          to="/explore"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Explore</router-link>
        <router-link
          to="/plants"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Plants</router-link>
        <router-link
          to="/learn"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >Learn</router-link>
        <router-link
          to="/about"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >About</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style></style>
