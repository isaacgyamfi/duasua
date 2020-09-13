<template>
  <div id="app">
    <div id="nav">
      <c-flex direction="row" justify="space-between" align="center">
        <c-text color="#ffffff" fontWeight="bold" fontSize="20px"
          >Duasua</c-text
        >
        <c-box>
          <router-link to="/explore">Explore</router-link>
          <router-link to="/plants">Plants</router-link>
          <router-link to="/learn">Learn</router-link>
          <router-link to="/about">About</router-link>
        </c-box>
      </c-flex>
    </div>
    <router-view />
  </div>
</template>

<style>
@font-face {
  font-family: Lora serif;
  src: local('Lora') url(./assets/fonts/Lora-Regular.ttf) format('truetype');
}
body {
  background-color: #faf9f9;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Lora serif;
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
