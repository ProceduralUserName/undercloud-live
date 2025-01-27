<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuitems = [
  { title: "Home", path: "/" },
  { title: "Pricing", path: "/pricing" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const open = ref(false);
const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <LandingContainer>
    <header
      :class="[
        // Positioning & transition classes
        'fixed top-0 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ease-in-out',

        // When scrolled
        scrolled
          ? 'bg-gradient-to-r from-purple-600 to-orange-500 shadow-lg mt-8 rounded-lg w-4/5'
          : // Default (not scrolled)
            'bg-black mt-0 rounded-none w-full',
      ]"
    >
      <div
        class="flex flex-col lg:flex-row justify-between items-center px-3 py-2 max-w-screen-xl mx-auto"
      >
        <div class="flex w-full lg:w-auto items-center justify-between">
          <NuxtLink to="/">
            <img
              src="/assets/img/logo-alone.png"
              alt="logo"
              class="h-12 w-auto items-start"
            />
          </NuxtLink>

          <div class="block lg:hidden">
            <button @click="open = !open" class="text-gray-800">
              <svg
                fill="currentColor"
                class="w-4 h-4"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path
                  v-show="open"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                ></path>
                <path
                  v-show="!open"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <nav
          class="w-full lg:w-auto mt-2 lg:flex lg:mt-0"
          :class="{ block: open, hidden: !open }"
        >
          <ul class="flex flex-col lg:flex-row lg:gap-3">
            <li v-for="item of menuitems" :key="item.title">
              <NuxtLink
                :to="item.path"
                :class="[
                  'flex lg:px-3 py-2 text-white transition duration-200 ease-in-out',
                  scrolled ? 'hover:text-black' : 'hover:text-amber-500',
                ]"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
          <div class="lg:hidden flex flex-col items-start mt-3 mx-3 gap-4">
            <NuxtLink to="about" class="text-white hover:text-amber-500"
              >Who am I?</NuxtLink
            >
            <LandingLink href="pricing" size="md">Get Started/</LandingLink>
          </div>
        </nav>
        <div class="justify-items-end">
          <div class="hidden lg:flex items-center gap-4">
            <NuxtLink to="about" class="text-white hover:text-amber-500"
              >Who am I?</NuxtLink
            >
            <LandingLink href="pricing" size="md">Get Started</LandingLink>
          </div>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
