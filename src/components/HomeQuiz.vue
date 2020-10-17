<template>
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
</template>

<script>
export default {
    name: 'HomeQuiz'
}
</script>