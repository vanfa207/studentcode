<template>
  <div class="bg-white dark:bg-black font-battambang">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Battambang:wght@100;300;400;700;900&display=swap" rel="stylesheet">

    <header class="flex justify-between items-center rounded-xl transition-all duration-500 bg-gray-200/70 hover:bg-gray-200/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] px-3 py-3 m4:px-5 m4:py-4 fixed top-2 m4:top-4 left-1/2 -translate-x-1/2 m4:w-[1240px] w-80 sl:w-[375px] sx:w-[425px] z-50">
      <nav class="hidden w-full max-w-screen-xl mx-auto m4:flex items-center justify-between">
        <div class="text-xl font-bold bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
          <router-link to="/">Student Code</router-link>
        </div>
        <NavBar/>
        <div class="flex items-center gap-4">
          <Translate/>
          <router-link to="login">
            <button
              class="p-3 rounded-xl transition-all duration-500 group bg-white/70 hover:bg-white/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:hover:bg-gray-700/80 dark:border-gray-700/50 dark:text-white shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105">
              <div class="relative">
                <svg class="w-5 h-5 group-hover:scale-110 transition-all duration-500" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor">
                  <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z"></path>
                </svg>
              </div>
            </button>
          </router-link>
          <DarkMode/>
        </div>
      </nav>

      <!-- moble responsive -->
      <nav class="flex justify-between w-80 sl:w-[375px] sx:w-[425px] mx-auto items-center m4:hidden">
        <button
          @click="toggleMenu"
          class="p-3 rounded-xl transition-all duration-500 group bg-white/70 hover:bg-white/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:hover:bg-gray-700/80 dark:border-gray-700/50 dark:text-white shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105">
          <div class="relative">
            <svg class="w-5 h-5 group-hover:scale-110 transition-all duration-500" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path>
            </svg>
          </div>
        </button>

        <div :class="{ 'translate-x-0 opacity-100 transition-all duration-300': !isMenuOpen, 'translate-x-full opacity-0 transition-all duration-300': isMenuOpen }"
              class="flex flex-col md:flex-row items-center gap-3 rounded-xl mt-2 bg-gray-200/70 hover:bg-gray-200/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] font-semibold absolute md:static top-full left-0 w-full md:w-auto bg-gray-200 dark:bg-gray-800 md:bg-transparent p-4 md:p-0 transition-all duration-300">
          <router-link
            v-for="(item, index) in navLinks"
            :key="index"
            :to="item.to"
            class="flex items-center gap-2 px-4 py-3 hover:-mt-2 hover:scale-105 transition-all duration-500 rounded-lg w-full md:w-auto"
            @click="closeMenu"
          >
            <span v-html="item.icon"></span>
            <span>{{ $t(item.labelKey) }}</span>
          </router-link>
        </div>

        <div class="flex gap-1.5">
          <Translate/>
          <router-link to="login">
            <button
              class="p-3 rounded-xl transition-all duration-500 group bg-white/70 hover:bg-white/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:hover:bg-gray-700/80 dark:border-gray-700/50 dark:text-white shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105">
              <div class="relative">
                <svg class="w-5 h-5 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="currentColor">
                  <path d="M14 14.252V16.3414C13.3744 16.1203 12.7013 16 12 16C8.68629 16 6 18.6863 6 22H4C4 17.5817 7.58172 14 12 14C12.6906 14 13.3608 14.0875 14 14.252ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11ZM20 17H23V19H20V22.5L15 18L20 13.5V17Z"></path>
                </svg>
              </div>
            </button>
          </router-link>
          <DarkMode/>
        </div>
      </nav>
    </header>
    <main class="">
      <router-view/>
    </main>
    <footer>
      <Footer/>
    </footer>
    <div>
      <button class="fixed z-20 bottom-4 left-4 bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] font-medium p-4 rounded-xl hover:scale-110 transition duration-300">
        <router-link to="/support" class="flex items-center gap-2 ">
          <svg stroke="currentColor" 
          fill="currentColor" 
          stroke-width="0" 
          viewBox="0 0 512 512" 
          class="text-xl medium-pulse" 
          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
        </svg>
        <span class="hidden m4:block">Support</span>
        </router-link>
      </button>
      <button class="fixed z-20 bottom-4 right-4 bg-gradient-to-r from-blue-500 to-blue-800 backdrop-blur-sm text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] font-medium p-4 rounded-xl hover:scale-110 transition duration-300">
        <a href="https://t.me/Faking007" class="flex items-center gap-2">
          <svg stroke="currentColor" 
            fill="currentColor" 
            stroke-width="0" 
            viewBox="0 0 496 512" 
            class="text-xl" 
            height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"></path>
          </svg>
          <span class="hidden m4:block">Join Telegram</span>
        </a>
      </button>
    </div>
  </div>
</template>

<script setup>
  import DarkMode from '../components/DarkMode.vue';
  import Footer from '../components/Footer.vue';
  import NavBar from '../components/NavBar.vue';
  import Translate from '../components/Translate.vue';

  import { ref } from 'vue';

  const navLinks = [
    { to: '/', labelKey: 'home', icon: '🏠' },
    { to: '/video', labelKey: 'video', icon: '📹' },
    { to: '/available', labelKey: 'available', icon: '📚' },
    { to: '/about', labelKey: 'about', icon: 'ℹ️' },
    { to: '/contact', labelKey: 'contact', icon: '📞' },
  ];
    const isMenuOpen = ref(false);

  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };

  const closeMenu = () => {
    isMenuOpen.value = false;
  };
</script>

<style scoped>

</style>
