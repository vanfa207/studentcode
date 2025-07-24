<template>
  <div class="flex items-center gap-4">
    <!-- EN Button -->
    <button v-if="currentLanguage !== 'en'" @click="switchLanguage('en')" class="rounded-full transition-all duration-500 group bg-white/70 hover:bg-white/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:hover:bg-gray-700/80 dark:border-gray-700/50 dark:text-white shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105">
      <img src="/src/assets/icons/en.png" class="rounded-full h-10" alt="English">
    </button>

    <!-- KH Button -->
    <button v-if="currentLanguage !== 'kh'" @click="switchLanguage('kh')" class=" rounded-full transition-all duration-500 group bg-white/70 hover:bg-white/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:hover:bg-gray-700/80 dark:border-gray-700/50 dark:text-white shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105">
      <img src="/src/assets/icons/kh.png" class="rounded-full h-10" alt="Khmer">
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // <-- Ensure you import ref
import { useI18n } from 'vue-i18n';

// Accessing locale from vue-i18n
const { locale } = useI18n();

// Ref to track the current language
const currentLanguage = ref(locale.value);

// Function to switch languages
const switchLanguage = (lang) => {
  locale.value = lang; // Update the locale to the selected language
  currentLanguage.value = lang; // Update the current language
  localStorage.setItem('locale', lang); // Store the language in localStorage
};
</script>

<style scoped>
/* Optional Tailwind CSS or your own CSS */
</style>
