<template>
  <div>
    <div>
      <h1 class="text-2xl m4:text-5xl text-center font-bold pb-7 pt-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
        {{ $t('leader_title') }}
      </h1>
      <p class="text-gray-800 dark:text-gray-200 text-sm m4:text-base max-w-80 sx:max-w-[400px] text-center m4:max-w-2xl mx-auto pb-10">
        {{ $t('leader_description') }}
      </p>
    </div>

    <div
      class="m4:w-9/12 w-[300px] sl:w-[340px] sx:w-[400px] mx-auto border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 dark:bg-gray-800/70 flex items-center justify-center shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] bg-gray-200 dark:bg-gray-800 rounded-lg py-10 mb-4"
    >
      <div class="flex flex-col m4:flex-row justify-center gap-10 items-center">
        <div class="relative w-52 h-52">
          <div class="absolute rounded-full z-0 top-0 w-52 h-52 bg-blue-500"></div>
          <img src="/src/assets/imgs/profile.png" alt="Profile Picture"
               class="absolute w-48 h-48 border-4 z-10 object-cover bg-blue-600 rounded-full" />
        </div>

        <div class="ml-4 m4:w-7/12">
          <h2 class="text-2xl text-gray-800 dark:text-gray-200 font-bold">{{ $t('name') }}</h2>
          <p class="text-blue-500 text-xl font-semibold">{{ $t('role') }}</p>
          <p class="mt-2 text-gray-800 dark:text-gray-200">{{ $t('profile_description') }}</p>
           <div class="mt-4 flex items-center justify-center gap-4">
              <router-link to="/contact" class="bg-white dark:bg-black text-gray-800 dark:text-gray-200 py-2 px-2.5 m4:px-5 m4:py-3 rounded-full border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 hover:-mt-2 transition-all duration-300 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">📞 {{ $t('contact') }}</router-link>
              <!-- Social Links (Optional) -->
              <a href="https://t.me/Faking007" class="bg-white dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      class="m4:w-6 m4:h-6 w-5 h-5"
                      >
                      <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.3584 9.38246C11.3857 9.78702 9.4418 10.6244 6.5266 11.8945C6.05321 12.0827 5.80524 12.2669 5.78266 12.4469C5.74451 12.7513 6.12561 12.8711 6.64458 13.0343C6.71517 13.0565 6.78832 13.0795 6.8633 13.1039C7.37388 13.2698 8.06071 13.464 8.41776 13.4717C8.74164 13.4787 9.10313 13.3452 9.50222 13.0711C12.226 11.2325 13.632 10.3032 13.7203 10.2832C13.7826 10.269 13.8689 10.2513 13.9273 10.3032C13.9858 10.3552 13.98 10.4536 13.9739 10.48C13.9361 10.641 12.4401 12.0318 11.6659 12.7515C11.4351 12.9661 11.2101 13.1853 10.9833 13.4039C10.509 13.8611 10.1533 14.204 11.003 14.764C11.8644 15.3317 12.7323 15.8982 13.5724 16.4971C13.9867 16.7925 14.359 17.0579 14.8188 17.0156C15.0861 16.991 15.3621 16.7397 15.5022 15.9903C15.8335 14.2193 16.4847 10.3821 16.6352 8.80083C16.6484 8.6623 16.6318 8.485 16.6185 8.40717C16.6052 8.32934 16.5773 8.21844 16.4762 8.13635C16.3563 8.03913 16.1714 8.01863 16.0887 8.02009C15.7125 8.02672 15.1355 8.22737 12.3584 9.38246Z"></path>
                  </svg>
              </a>
              <a href="https://www.facebook.com/share/12Gd8Aa2f6N/?mibextid=wwXIfr" class="bg-white dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      class="m4:w-6 m4:h-6 w-5 h-5"
                      >
                      <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                  </svg>
              </a>
              <a href="mailto:vansofa709@gmail.com" class="bg-white dark:bg-black text-gray-800 hover:-mt-2 transition-all duration-300 dark:text-white p-3 rounded-full dark:hover:bg-gray-700 border-gray-200/50 backdrop-blur-sm dark:border-gray-800/70 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]">
                  <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      class="m4:w-6 m4:h-6 w-5 h-5"
                      >
                      <path d="M2 5.5V3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V19H20V7.3L12 14.5L2 5.5ZM0 10H5V12H0V10ZM0 15H8V17H0V15Z"></path>
                  </svg>
              </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>
