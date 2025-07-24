<template>
  <!-- Navigation -->
  <nav class="flex items-center gap-5 text-gray-800 dark:text-gray-200 font-semibold">
    <router-link
      v-for="(item, index) in navLinks"
      :key="index"
      :to="item.to"
      class="flex items-center gap-2 px-4 py-3 hover:-mt-2 hover:scale-105 transition-all duration-300 rounded-lg"
    >
      <span v-html="item.icon"></span>
      <span>{{ $t(item.labelKey) }}</span>
    </router-link>
  </nav>
</template>

<script setup>
const navLinks = [
  { to: '/', labelKey: 'home', icon: '🏠' },
  { to: '/video', labelKey: 'video', icon: '📹' },
  { to: '/available', labelKey: 'available', icon: '📚' },
  { to: '/about', labelKey: 'about', icon: 'ℹ️' },
  { to: '/contact', labelKey: 'contact', icon: '📞' }
]
</script>