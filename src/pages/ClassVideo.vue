<template>
  <div class="py-5 m4:w-[1280px] mx-auto pt-14 m4:pt-20">
    <!-- Search Input -->
    <div class="text-center py-5">
      <h1 class="text-2xl m4:text-5xl font-bold pb-5 pt-4 bg-transparent bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-red-500">
        {{ $t('video_class') }}
      </h1>
      <p class="text-gray-800 dark:text-gray-200 text-sm m4:text-base max-w-80 sx:max-w-[400px] mx-auto text-center m4:max-w-2xl">{{ $t('choose_video_class_prompt') }}</p>
    </div>

    <div class="flex flex-col m4:flex-row items-center gap-4 py-5 m4:pt-12 m4:py-6">
      <input
        v-model="searchQuery"
        type="text"
        :placeholder="$t('search_lesson')"
        class="text-sm m4:text-base w-72 sl:w-[340px] sx:w-[400px] m4:w-80 px-4 py-2 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] bg-gray-200 dark:bg-gray-800 border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <!-- Category Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-1.5 m4:gap-2 text-sm m4:text-base">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="setActiveCategory(cat)"
          :class="[
            'px-3 py-1.5 rounded-full border border-gray-200/50 dark:border-gray-700/50 text-sm shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)]',
            activeCategory === cat ? 'bg-blue-500 text-gray-200' : 'bg-gray-200 text-gray-800 border-gray-300 dark:bg-gray-800 dark:text-gray-200'
          ]"
        >
          {{ $t(cat.toLowerCase().replace(' ', '_')) }}
        </button>
      </div>
    </div>

    <!-- Heading -->
    <h2 class="text-xl m4:text-2xl text-gray-800 dark:text-gray-200 font-bold pb-8 m4:pb-4 ">{{ $t('choose_video_class') }}</h2>

    <!-- Course Cards -->
    <div class="grid grid-cols-1 m4:grid-cols-3 justify-center items-center gap-8">
      <div
        v-for="(course, index) in filteredCourses"
        :key="index"
        class="bg-white bg-gray-200/70 hover:-mt-5 hover:bg-gray-200/80 text-gray-800 border-gray-200/50 backdrop-blur-sm dark:bg-gray-800/70 dark:border-gray-700/50 dark:text-white shadow-[0_0_8px_rgb(50_50_50)] dark:shadow-[0_0_8px_rgb(100_100_100)] relative border group rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-700"
      >
        <div class="relative overflow-hidden">
          <img
            :src="course.image"
            :alt="$t(course.title_key)"
            class="w-full h-40 sx:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
            @error="handleImgError"
          />
          <div class="absolute top-3 right-3 flex flex-col bg-gradient-to-r from-red-500 to-purple-500 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 -rotate-12 group-hover:rotate-0 rounded-full transition-all duration-300">
            <span class="line-through">{{ course.price }}</span>
            <span>{{ course.discount }}</span>
            <span>{{ course.pricediscount }}</span>
          </div>
          <span class="absolute bottom-3 left-3 bg-gray-800 text-white text-xs px-2.5 py-1 rounded-full">{{ $t(course.category.toLowerCase().replace(' ', '_')) }}</span>
        </div>
        <div class="p-4 relative h-72">
          <h3 class="text-lg font-bold mb-1">{{ $t(course.title_key) }}</h3>
          <p class="text-sm text-gray-800 dark:text-gray-200">{{ $t(course.description_key) }}</p>

          <div class="absolute w-11/12 bottom-[70px] flex justify-between items-center bg-green-50 border border-green-100 rounded-lg px-5 py-3">
            <div class="flex flex-col">
              <span class="line-through text-gray-500">{{ course.price }}</span>
              <span class="text-green-500 text-lg font-semibold">{{ course.pricediscount }}</span>
            </div>
            <span class="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{{ course.discount }} OFF</span>
          </div>

          <button
            class="absolute bottom-5 mt-4 w-11/12 bg-blue-500 text-white font-semibold py-2 rounded-full hover:scale-105 hover:bg-blue-600 transition-all duration-300"
            @click="viewCourse(course)"
          >
            {{ $t('buy_now') }}
          </button>
        </div>
      </div>
    </div>

    <!-- No Results Message -->
    <div v-if="filteredCourses.length === 0" class="text-center text-gray-500 mt-6">
      😢 {{ $t('no_lessons_found') }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Access i18n instance
const { t } = useI18n();

// Courses data with translation keys
const courses = ref([
  { 
    title_key: 'course_c_programming_title',
    description_key: 'course_c_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/c-programming.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_python_programming_title',
    description_key: 'course_python_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/python-programming.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_git_class_title',
    description_key: 'course_git_class_desc',
    category: 'Tools', 
    image: '/src/assets/imgs/git.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49', 
  },
  { 
    title_key: 'course_component_of_computer_title',
    description_key: 'course_component_of_computer_desc',
    category: 'Hardware', 
    image: '/src/assets/imgs/cp-of-computer.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_cpp_programming_title',
    description_key: 'course_cpp_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/c++programming.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_html_class_title',
    description_key: 'course_html_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/html.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49', 
  },
  { 
    title_key: 'course_css_class_title',
    description_key: 'course_css_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/css-style.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49', 
  },
  { 
    title_key: 'course_javascript_class_title',
    description_key: 'course_javascript_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/javascript.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_mysql_class_title',
    description_key: 'course_mysql_class_desc',
    category: 'Database', 
    image: '/src/assets/imgs/mysql.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49', 
  },
  { 
    title_key: 'course_react_class_title',
    description_key: 'course_react_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/react.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_php_class_title',
    description_key: 'course_php_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/php-programming.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_csharp_programming_title',
    description_key: 'course_csharp_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/c-programming.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_tailwind_css_class_title',
    description_key: 'course_tailwind_css_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/tailwind.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_java_programming_title',
    description_key: 'course_java_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/java-programming.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_dart_programming_title',
    description_key: 'course_dart_programming_desc',
    category: 'Programming language', 
    image: '/src/assets/imgs/dart-programming.png', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_flutter_class_title',
    description_key: 'course_flutter_class_desc',
    category: 'create_mobile_app', 
    image: '/src/assets/imgs/flutter.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_cyber_security_class_title',
    description_key: 'course_cyber_security_class_desc',
    category: 'Security', 
    image: '/src/assets/imgs/cyber-security.webp', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
  { 
    title_key: 'course_laravel_class_title',
    description_key: 'course_laravel_class_desc',
    category: 'create_website', 
    image: '/src/assets/imgs/laravel.jpg', 
    price: '$3.99',
    discount: '-20%',
    pricediscount: '$3.49',
  },
]);

// Categories
const categories = ref(['All', 'Programming language', 'create_website', 'create_mobile_app', 'Database', 'Security', 'Tools', 'Hardware']);

// Active category
const activeCategory = ref('All');

// Search input
const searchQuery = ref('');

// Filtered courses based on search and active category
const filteredCourses = computed(() => {
  const q = searchQuery.value.toLowerCase();
  return courses.value.filter(course => {
    const matchesSearch =
      t(course.title_key).toLowerCase().includes(q) ||
      t(course.description_key).toLowerCase().includes(q) ||
      t(course.category.toLowerCase().replace(' ', '_')).toLowerCase().includes(q);

    const matchesCategory =
      activeCategory.value === 'All' || course.category === activeCategory.value;

    return matchesSearch && matchesCategory;
  });
});

// Set active category
function setActiveCategory(category) {
  activeCategory.value = category;
}

// View course handler
function viewCourse(course) {
  alert(`${t('buy_now')}: ${t(course.title_key)}`);
}

// Fallback for broken images
function handleImgError(event) {
  event.target.src = 'https://via.placeholder.com/300x160?text=Image+Not+Found';
}
</script>