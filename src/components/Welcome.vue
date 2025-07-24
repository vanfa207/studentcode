<template>
    <div class="bg-gray-200 dark:bg-gray-800 flex flex-wrap justify-center items-center gap-5 pt-24 m4:pt-28 pb-8">
        <h1 class="border m4:w-60 w-52 flex justify-center bg-blue-500 bg-opacity-15 border-blue-500 text-blue-500 font-medium py-2.5 rounded-full text-sm m4:text-base">
            {{$t('welcome')}}
        </h1>
        <div>
            <h1 class="m4:w-9/12 max-w-80 sx:max-w-[400px] m4:max-w-6xl mx-auto text-2xl sx:text-3xl m4:text-[80px] m4:leading-[100px] text-center pt-2 font-extrabold bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
                {{ $t('heading1') }}
            </h1>
            <h2 class="m4:w-3/6 max-w-80 sx:max-w-[400px] m4:max-w-5xl mx-auto text-gray-800 dark:text-gray-300 text-sm m4:text-lg text-center font-medium mt-4">
                {{ $t('heading2') }}
            </h2>

            <div class="flex h-14 m4:h-20 flex-wrap justify-center items-center gap-5 mt-5 text-sm m4:text-base">
                <button>
                    <a href="https://t.me/Faking007" class="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-800 text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] font-bold px-5 py-3 m4:px-7 m4:py-4 rounded-xl hover:-mt-2 transition-all duration-300">
                        <span>{{ $t('register') }} </span>
                        <span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                    </a>
                </button>
                <button>
                    <router-link to="/available" class="flex items-center gap-2 bg-gray-200/70 hover:bg-gray-200/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] font-bold px-5 py-3 m4:px-7 m4:py-4 rounded-xl hover:-mt-2 transition-all duration-300">
                        <span>{{ $t('allLessons') }}</span>
                    </router-link>
                </button>
            </div>

            <div class="flex flex-wrap justify-center gap-5 pt-10">
                <div
                    v-for="(item, index) in cards"
                    :key="index"
                    class="relative bg-white bg-gray-200/70 hover:bg-gray-200/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] w-80 h-60 rounded-2xl text-center hover:-mt-2 transition-all duration-300"
                >
                    <div class="absolute left-7 top-7 bg-gradient-to-br from-blue-500 to-purple-500 px-4 py-3 rounded-xl">
                        <span class="text-3xl">{{ item.icon }}</span>
                    </div>
                    <div class="absolute bottom-5 px-5">
                        <h3 class="text-xl font-extrabold text-gray-800 dark:text-gray-200 mb-2">{{ $t(item.titleKey) }}</h3>
                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">{{ $t(item.descriptionKey) }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
    { icon: '💡', titleKey: 'card1_title', descriptionKey: 'card1_desc' },
    { icon: '🖥️', titleKey: 'card2_title', descriptionKey: 'card2_desc' },
    { icon: '🎯', titleKey: 'card3_title', descriptionKey: 'card3_desc' },
])
</script>
