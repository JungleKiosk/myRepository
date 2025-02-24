<script>
import ColorMode from "./ColorMode.vue";
import LanguageSwitcher from "./LanguageSwitcher.vue";

export default {
  name: "Navbar",
  components: {
    ColorMode,
    LanguageSwitcher
  }
};
</script>

<template>
  <nav class="navbar justify-content-center">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About me</router-link></li>
      <li><ColorMode /></li>
      <li><LanguageSwitcher /></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
