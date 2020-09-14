<template>
  <div class="p-5 home">
    <div class="flex">
      <div class="w-1/2 p-4 flex justify-center flex-col">
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
            Learn new plants
          </button>
        </div>
      </div>
      <div class="w-1/2 flex justify-center align-center">
        <div style="width: 400px;" class="rounded-md bg-white shadow-md p-4">
          <h4 class="mt-0 mb-5">How good are you with plants?</h4>
          <img
            style="height:250px; width:100%;"
            class="object-cover rounded-md"
            src="https://bs.floristic.org/image/o/1a03948baf0300da25558c2448f086d39b41ca30"
          />
          <div>
            <div class="m-4">
              <div>
                <input
                  value="tree a"
                  type="radio"
                  name="pop-quiz"
                  id="tree a"
                />
                <label class="ml-3 font-semibold text-lg">Tree A</label>
              </div>
              <div>
                <input
                  value="tree b"
                  type="radio"
                  name="pop-quiz"
                  id="tree b"
                />
                <label class="ml-3 font-semibold text-lg">Tree B</label>
              </div>
              <div>
                <input
                  value="tree c"
                  type="radio"
                  name="pop-quiz"
                  id="tree c"
                />
                <label class="ml-3 font-semibold text-lg">Tree C</label>
              </div>
              <div>
                <input
                  value="tree d"
                  type="radio"
                  name="pop-quiz"
                  id="tree d"
                />
                <label class="ml-3 font-semibold text-lg">Tree D</label>
              </div>
            </div>
            <button
              class="btn mt-4 block bg-green-500 text-white shadow-sm hover:shadow-md px-3 py-2 rounded-md"
            >
              Submit answer
            </button>
          </div>
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
