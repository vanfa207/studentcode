<template>
  <div class="text-center py-5">
    <!-- Header -->
    <h1 class="text-2xl max-w-80 sx:max-w-[400px] m4:text-5xl m4:max-w-6xl mx-auto font-bold py-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
      {{ $t('purpose_heading') }}
    </h1>
    <p class="text-gray-800 dark:text-gray-200 max-w-80 sx:max-w-[400px] m4:max-w-6xl text-sm m4:text-base m4:w-3/6 mx-auto mb-10">
      {{ $t('purpose_prompt') }}
    </p>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 m4:grid-cols-3 items-center gap-10 m4:gap-8">
      <div
        v-for="(item, index) in features"
        :key="index"
        class="bg-white hover:bg-gray-200 dark:bg-gray-800 h-60 p-6 border-b-4 rounded-2xl shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] hover:-mt-2 transition-all duration-700 relative"
        :class="index === 1 ? 'border-purple-500' : 'border-blue-500'"
      >
        <!-- Icon -->
        <div class="absolute -top-5 left-8 w-12 h-12 m4:w-10 m4:h-10 bg-white rounded-full border-2 flex items-center justify-center shadow-md"
             :class="index === 1 ? 'border-purple-500' : 'border-blue-500'"
        >
          {{ item.icon }}
        </div>

        <!-- Content -->
        <h2
          class="mt-8 mb-2 text-xl font-extrabold"
          :class="index === 1 ? 'text-purple-500' : 'text-blue-500'"
        >
          {{ $t(item.title_key) }}
        </h2>
        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
          {{ $t(item.description_key) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  {
    title_key: 'feature_code_skills_development_title',
    description_key: 'feature_code_skills_development_desc',
    icon: '📚',
  },
  {
    title_key: 'feature_creating_community_title',
    description_key: 'feature_creating_community_desc',
    icon: '🤝',
  },
  {
    title_key: 'feature_skill_level_improvement_title',
    description_key: 'feature_skill_level_improvement_desc',
    icon: '🚀',
  },
]);
</script>