<template>
  <div>
    <h1 class="text-2xl m4:text-5xl max-w-80 sx:max-w-[400px] m4:max-w-6xl mx-auto text-center font-bold py-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      {{ $t('popular_programming_languages') }}
    </h1>
    <div class="w-full m4:py-5">
      <Vue3Marquee 
        :items="techStack"
        :items-per-view="4"
        :gap="20"
        :speed="50"
        :duration="50" 
        :direction="'reverse'"
        class="overflow-hidden"
      >
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="m4:py-6 py-4 flex flex-col items-center text-center space-y-2 mx-2.5 m4:mx-8 hover:scale-125 transition-transform duration-300"
        >
          <!-- Circle icon container -->
          <div class="h-10 w-10 m4:w-20 m4:h-20 rounded-full border border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 dark:bg-gray-800/70 flex items-center justify-center shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] bg-gray-200 dark:bg-gray-800">
            <img :src="tech.icon" :alt="$t(tech.name_key)" class="h-5 w-5 m4:w-10 m4:h-10 object-contain" @error="handleImgError" />
          </div>
          <!-- Label -->
          <p class="text-xs m4:text-sm text-gray-700 dark:text-gray-200 font-medium">{{ $t(tech.name_key) }}</p>
        </div>
      </Vue3Marquee>

      <Vue3Marquee 
        :items="techStack"
        :items-per-view="4"
        :gap="20"
        :speed="50"
        :duration="50"
        :direction="'right'"
        class="overflow-hidden"
      >
        <div
          v-for="(tech, index) in techStack"
          :key="index"
          class="py-4 m4:py-6 flex flex-col items-center text-center space-y-2 mx-2.5 m4:mx-8 hover:scale-125 transition-transform duration-300"
        >
          <!-- Circle icon container -->
          <div class="h-10 w-10 m4:w-20 m4:h-20 rounded-full border border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 dark:bg-gray-800/70 flex items-center justify-center shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] bg-gray-200 dark:bg-gray-800">
            <img :src="tech.icon" :alt="$t(tech.name_key)" class="h-5 w-5 m4:w-10 m4:h-10 object-contain" @error="handleImgError" />
          </div>
          <!-- Label -->
          <p class="text-xs m4:text-sm text-gray-700 dark:text-gray-200 font-medium">{{ $t(tech.name_key) }}</p>
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';

const techStack = ref([
  { name_key: 'php', icon: '/src/assets/icons/php-original.svg' },
  { name_key: 'swift', icon: '/src/assets/icons/swift-original.svg' },
  { name_key: 'kotlin', icon: '/src/assets/icons/kotlin-original.svg' },
  { name_key: 'go', icon: '/src/assets/icons/go-original.svg' },
  { name_key: 'dart', icon: '/src/assets/icons/dart-original.svg' },
  { name_key: 'html5', icon: '/src/assets/icons/html-original.svg' },
  { name_key: 'css3', icon: '/src/assets/icons/css-original.svg' },
  { name_key: 'javascript', icon: '/src/assets/icons/javascript-original.svg' },
  { name_key: 'java', icon: '/src/assets/icons/java-original.svg' },
  { name_key: 'cpp', icon: '/src/assets/icons/cpp-original.svg' },
  { name_key: 'python', icon: '/src/assets/icons/python-original.svg' },
  { name_key: 'nodejs', icon: '/src/assets/icons/nodejs-original.svg' },
  { name_key: 'react', icon: '/src/assets/icons/react-original.svg' },
  { name_key: 'typescript', icon: '/src/assets/icons/typescript-original.svg' },
]);

function handleImgError(event) {
  event.target.src = 'https://via.placeholder.com/40x40?text=Icon+Not+Found';
}
</script>

<style lang="scss" scoped>
/* Add SCSS styles here if needed */
</style>