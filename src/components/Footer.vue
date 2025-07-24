<template>
  <footer class="m4:w-[1280px] mx-auto bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-5">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 pt-5 pb-10 gap-10">
      <!-- About Us -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ $t('about_us') }}</h2>
        <p class="text-sm leading-relaxed mb-4">
          {{ $t('about_us_description') }}
        </p>
        <p class="">{{ $t('made_by_students') }}</p>
      </div>

      <!-- Quick Links -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ $t('quick_links') }}</h2>
        <ul class="space-y-2">
          <li v-for="(link, index) in navLinks" :key="index">
            <a :href="link.url" class="hover:text-blue-500">{{ $t(link.labelKey) }}</a>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h2 class="text-xl font-bold mb-4">{{ $t('contact_us') }}</h2>
        <p class="pb-2">{{ $t('contact_description') }}</p>
        <p>{{ $t('email') }} : <a href="mailto:vansofa709@gmail.com" class="text-blue-500">vansofa709@gmail.com</a></p>
        <p class="pt-2">{{ $t('phone') }} : +855 99 70 55 77</p>

        <div class="flex items-center gap-4 mt-4">
          <a
            v-for="(social, index) in socialLinks"
            :key="index"
            :href="social.url"
            target="_blank"
            rel="noopener"
            class="bg-white dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]"
            :style="{ color: social.color }"
          >
            <img :src="social.icon" alt="" class="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
    <hr class="border-gray-100 dark:border-gray-700 px-5">
    <p class="text-center py-5">{{ $t('copyright') }}</p>
  </footer>
</template>

<script setup>
const navLinks = [
  { labelKey: 'home', url: '/' },
  { labelKey: 'available', url: '/available' },
  { labelKey: 'about_me', url: '/about' },
  { labelKey: 'contact', url: '/contact' }
]

const socialLinks = [
   {
    name: 'Facebook',
    url: 'https://www.facebook.com/share/12Gd8Aa2f6N/?mibextid=wwXIfr',
    icon: '/src/assets/icons/facebook.png'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Faking007',
    icon: '/src/assets/icons/telegram.png'
  },
  {
    name: 'Gmail',
    url: 'mailto:vansofa709@gmail.com',
    icon: '/src/assets/icons/gmail.png'
  },
  {
    name: 'YouTube',
    url: 'http://www.youtube.com/@sdlgaming9664',
    icon: '/src/assets/icons/youtube.png'
  }
]
</script>

<style scoped>
/* Optional custom styles */
</style>
