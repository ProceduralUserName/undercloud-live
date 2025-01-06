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
        'fixed top-0 left-0 w-full z-10 transition-shadow duration-300',
        scrolled ? 'bg-white shadow-lg' : 'bg-white',
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
              <a
                :href="item.path"
                class="flex lg:px-3 py-2 text-black hover:text-purple-500 transition duration-200 ease-in-out"
              >
                {{ item.title }}
              </a>
            </li>
          </ul>
          <div class="lg:hidden flex flex-col items-start mt-3 mx-3 gap-4">
            <NuxtLink to="about" class="text-black hover:text-purple-500"
              >Who am I?</NuxtLink
            >
            <LandingLink href="pricing" size="md">Get Started</LandingLink>
          </div>
        </nav>
        <div>
          <div class="hidden lg:flex items-center gap-4">
            <NuxtLink to="about" class="text-black hover:text-purple-500"
              >Who am I?</NuxtLink
            >
            <LandingLink href="pricing" size="md">Get Started</LandingLink>
          </div>
        </div>
      </div>
    </header>
  </LandingContainer>
</template>
