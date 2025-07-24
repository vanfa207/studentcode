<template>
  <div class="bg-white dark:bg-black m4:w-[1280px] mx-auto pt-24 py-5 m4:pt-28 m4:py-12 text-gray-800 dark:text-gray-200 font-sans">
    <div class="m4:w-10/12 bg-gray-200/70 hover:bg-gray-200/80 text-gray-800 border border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] mx-auto flex flex-col m4:flex-row gap-8 items-center p-5">
      <!-- Left content -->
      <div class="m4:w-7/12">
        <div class="flex items-center space-x-4 mb-4">
          <img src="/src/assets/imgs/logo.jpg" alt="Logo" class="w-24 h-24 rounded-full" />
          <h1 class="m4:text-2xl sx:text-xl text-base sl:text-lg md:text-3xl font-extrabold">
            {{ $t('title') }}
          </h1>
        </div>

        <p class="text-lg mb-4">
          {{ $t('subtitle') }}
        </p>

        <h2 class="text-xl font-bold mb-2">✨ {{ $t('purpose') }}</h2>
        <ul class="list-disc pl-6 space-y-2">
          <li>{{ $t('purpose_list.item1') }}</li>
          <li>
            {{ $t('purpose_list.item2') }}
            <a href="https://www.studentcode.com" target="_blank" class="text-blue-500 underline">
              www.studentcode.com
            </a>
          </li>
          <li>{{ $t('purpose_list.item3') }}</li>
          <li>{{ $t('purpose_list.item4') }}</li>
        </ul>

        <!-- Buttons -->
        <div class="pt-6 flex flex-col m4:flex-row m4:items-center h-36 m4:h-20 gap-4">
          <router-link to="/" class="bg-white text-center dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">
            {{ $t('back_to_home') }}
          </router-link>
          <button class="bg-white dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">
            {{ $t('support_payments') }}
          </button>
        </div>
      </div>

      <!-- QR Code section -->
      <div class="text-center m4:w-4/12">
        <h2 class="sx:text-xl text-base sl:text-lg font-bold mb-4">
          ✨ {{ $t('scan_to_donate') }}
        </h2>
        <img
          src="/src/assets/imgs/qr.jpg"
          alt="QR Code"
          class="w-60 h-60 mx-auto border"
        />
        <p class="mt-2 text-gray-700 dark:text-gray-300">({{ $t('fa_king') }})</p>
      </div>
    </div>
  </div>
</template>