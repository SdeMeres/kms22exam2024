<script setup lang="ts">
import Hero from "./components/Hero.vue";
import SponsorBar from "./components/SponsorBar.vue";
</script>

<template>
  <main class="wrapper">
    <Hero></Hero>
    <SponsorBar></SponsorBar>
    <h2 id="to-be-made">To be made</h2>
  </main>
</template>

<style lang="scss">
@import "../src/assets/scss/style.scss";

#app {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: "Space Grotesk", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>

<style scoped lang="scss">
h2 {
  color: rgb(var(--lords-purple));
  font-size: 3rem;
  font-family: "Cinzel Decorative";
  border: 3rem;
}

@media (max-width: 900px) {
  h2 {
    font-size: 2rem;
  }
}
</style>
