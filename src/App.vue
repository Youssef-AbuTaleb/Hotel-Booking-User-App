<template>
  <main-header />
  <main-nav />
  <main class="main-tab">
    <router-view></router-view>
  </main>
  <main-footer />
</template>

<script>
import MainNav from "./components/MainNav.vue";
import MainHeader from "./components/MainHeader.vue";
import MainFooter from "./components/MainFooter.vue";

export default {
  name: "App",
  components: { MainNav, MainHeader, MainFooter },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  color: #202223;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
body {
  background: rgb(232, 247, 254);
  min-height: 100vh;
}
.main-tab {
  padding: 1rem 2rem;
}
</style>
