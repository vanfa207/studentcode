<template>
    <div class="m4:pt-24 pt-20 pb-5 m4:w-[1280px] mx-auto">
        <Leader/>
        <div class="text-center py-5">
            <h1 class="text-2xl m4:text-5xl max-w-80 sx:max-w-[400px] m4:max-w-6xl mx-auto text-center font-bold m4:py-7 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
            {{ $t('contact_us') }}
            </h1>
            <p class="text-gray-800 dark:text-gray-200 text-sm pt-4 pb-7 m4:pb-12">
            {{ $t('contact_prompt') }}
            </p>

            <div class="flex flex-wrap justify-center h-[265px] m4:h-40 gap-4">
            <div
                v-for="(link, index) in socialLinks"
                :key="index"
                class=""
            >
                <a
                :href="link.url"
                target="_blank"
                rel="noopener"
                class="text-gray-800 dark:text-gray-200 w-36 flex flex-col items-center justify-center gap-3 hover:-mt-2 transition-all duration-300 p-3 hover:bg-gray-200 dark:hover:bg-gray-800 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]"
                >
                <img :src="link.icon" :alt="$t(link.name_key)" class="w-16 h-16" />
                <span>{{ $t(link.name_key) }}</span>
                </a>
            </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'
    import Leader from '../components/Leader.vue';
    
    const socialLinks = ref([
        {
            name_key: 'facebook',
            url: 'https://www.facebook.com/share/12Gd8Aa2f6N/?mibextid=wwXIfr',
            icon: '/src/assets/icons/facebook.png',
        },
        {
            name_key: 'telegram',
            url: 'https://t.me/Faking007',
            icon: '/src/assets/icons/telegram.png',
        },
        {
            name_key: 'gmail',
            url: 'mailto:vansofa709@gmail.com',
            icon: '/src/assets/icons/gmail.png',
        },
        {
            name_key: 'youtube',
            url: 'http://www.youtube.com/@sdlgaming9664',
            icon: '/src/assets/icons/youtube.png',
        },
    ]);

</script>

<style lang="scss" scoped>

</style>