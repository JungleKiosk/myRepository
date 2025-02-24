<script setup>
import { useI18n } from 'vue-i18n';
import { ref, onMounted } from 'vue';

const { locale } = useI18n();
const currentLang = ref('it');

const toggleLanguage = () => {
  const newLang = currentLang.value === 'it' ? 'en' : 'it';
  locale.value = newLang;
  currentLang.value = newLang;
  localStorage.setItem('language', newLang); // Salva la lingua selezionata
};

// Imposta la lingua salvata al montaggio del componente
onMounted(() => {
  const savedLang = localStorage.getItem('language') || 'it';
  locale.value = savedLang;
  currentLang.value = savedLang;
});
</script>

<template>
  <div class="language-switcher">
    <a class="" @click="toggleLanguage">
      <span v-if="currentLang === 'it'">EN🌍</span>
      <span v-else>IT🍕</span>
    </a>
  </div>
</template>

<style scoped>

</style>
