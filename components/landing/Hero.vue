<template>
  <main
    class="w-full grid lg:grid-cols-2 items-center h-screen rounded-lg relative place-items-center"
  >
    <!-- Spider Background -->
    <Spider class="absolute inset-0 w-full h-full" />

    <!-- Image Section -->
    <div class="p-4 md:p-8 md:order-1 hidden md:block z-10">
      <!-- <div
        class="relative max-w-[600px] w-full aspect-square overflow-hidden rounded-full mx-auto"
      > -->
      <img
        class="transition-transform transform hover:scale-110 max-w-lg h-auto object-cover"
        src="~/assets/img/name_logo_2.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
      />
      <!-- </div> -->
    </div>

    <!-- Content Section -->
    <div class="px-4 md:px-8 text-center lg:text-left z-10">
      <h1
        class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-yellow-alt"
      >
        Hand-coded.<br />
        Your business.<br />
        Your website.
      </h1>
      <p class="text-lg mt-4 max-w-xl mx-auto lg:mx-0 text-white">
        UnderCloud is a web design agency in North Haven Connecticut specialized
        in creating high-quality, hand-crafted websites that attract and convert
        customers. Empower your business with a powerful online presence.
      </p>
      <div
        class="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
      >
        <NuxtLink
          class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black border-1 border-purple-400 text-white border-2 border-purple-400 hover:bg-black hover:text-purple-600 hover:border-black"
          to="pricing"
          >Get Started</NuxtLink
        >
        <NuxtLink
          class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black text-black hover:bg-black hover:text-purple-600"
          to="about"
        >
          Why Us?
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
import Spider from "~/components/landing/Spider.vue";

export default {
  components: {
    Spider,
  },
  props: {
    backgroundColor: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
/* Remove the gradient and replace it with the Spider component */
.text-yellow-alt {
  color: #ffc107;
}

/* Ensure child components are layered correctly */
.main {
  position: relative;
}
</style>
