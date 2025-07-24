<template>
  <div class="flex flex-col justify-center items-center bg-white dark:bg-black pt-28 pb-5">
    <div
      class="bg-white/70 text-gray-800 dark:text-gray-200 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] p-8 rounded-xl m4:w-5/12"
    >
      <div class="flex justify-center mb-6">
        <img
          class="w-16 h-16 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)]"
          src="/src/assets/imgs/logo.jpg"
          alt="Logo"
        />
      </div>
      <h2 class="text-3xl text-center mb-4">{{ $t('welcomeBack') }}</h2>
      <p class="text-center mb-6">{{ $t('signInContinue') }}</p>

      <form @submit.prevent="submitLogin">
        <div class="mb-4">
          <label for="username" class="block mb-2 text-sm m4:text-base">{{ $t('username') }}</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="w-full p-2 border rounded-lg text-sm m4:text-base bg-gray-200 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)]"
            :placeholder="$t('enterUsername')"
          />
        </div>

        <div class="mb-4">
          <label for="password" class="block mb-2 text-sm m4:text-base">{{ $t('password') }}</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full p-2 rounded-lg border text-sm m4:text-base bg-gray-200 dark:bg-gray-800 border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)]"
            :placeholder="$t('enterPassword')"
          />
        </div>

        <div class="mb-6">
          <label class="flex items-center text-sm m4:text-base">
            <input type="checkbox" v-model="rememberMe" class="mr-2 size-4" />
            {{ $t('rememberMe') }}
          </label>
        </div>

        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-blue-600 text-white text-sm m4:text-base py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)] hover:scale-105 transition-all duration-300"
          >
            {{ $t('signIn') }}
          </button>
        </div>

        <p
          class="relative text-center mx-auto text-sm m4:text-base bg-gray-200 dark:bg-gray-800 w-40 py-1 border border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)]"
        >
          {{ $t('orContinueWith') }}
        </p>

        <div v-for="(button, index) in socialButtons" :key="index" class="mb-4 pt-5">
          <a :href="button.url" target="_blank" rel="noopener noreferrer">
            <div
              :class="[
                'w-full text-gray-800 dark:text-gray-200 py-2 rounded-lg border border-gray-200/50 dark:border-gray-700/50 hover:scale-105 transition-all duration-300',
                'shadow-[0_0_5px_rgb(50_50_50)] dark:shadow-[0_0_5px_rgb(100_100_100)]',
                'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700',
              ]"
            >
              <span class="flex justify-center items-center gap-2 text-sm m4:text-base">
                <img :src="button.icon" alt="social icon" class="w-6 h-6" />
                {{ $t('registerAccount') }}
              </span>
            </div>
          </a>
        </div>
      </form>
    </div>

    <p class="pt-5 text-gray-500 text-xs m4:text-base">
      {{ $t('contactAdmin') }}
      <a href="https://t.me/Faking007" class="text-blue-500 font-semibold">Contact admin</a>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);

const socialButtons = ref([
  {
    label: 'registerAccount',
    url: 'https://t.me/Faking007',
    icon: '/src/assets/icons/telegram.png',
  },
]);

const submitLogin = () => {
  console.log('Login data:', {
    username: username.value,
    password: password.value,
    rememberMe: rememberMe.value,
  });
};
</script>
