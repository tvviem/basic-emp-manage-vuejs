<template>
  <div id="app">
    <nav-bar />
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    "nav-bar": navbar
  }
};
</script>

<style>
</style>
