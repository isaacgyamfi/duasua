<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/global/NavBar";
export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@font-face {
  font-family: "Lora" serif;
  src: local("Lora-Regular") url(./assets/fonts/Lora-Regular.ttf)
    format("truetype");
}
body {
  background-color: #faf9f9;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Lora" serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding-left: 20px;
  padding-right: 20px;
  background-color: #3ea76a;
}

#nav a {
  color: #ffffff;
  margin-left: 5px;
  margin-right: 5px;
  text-decoration: none;
  padding: 5px 10px;
}

#nav a:hover {
  border-bottom: 3px solid #ffffff;
}

#nav a.router-link-exact-active {
  color: #2c3e50;
}
</style>
