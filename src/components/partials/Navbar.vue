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
      <li><router-link to="/">{{ $t('navbar.home') }}</router-link></li>
      <li><router-link to="/about">{{ $t('navbar.aboutme') }}</router-link></li>
      <li><router-link to="/tools">{{ $t('navbar.tools') }}</router-link></li>
      <li><LanguageSwitcher /></li>
      <li><ColorMode /></li>
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
