<template>
  <div
    class="hero-gradient px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"
  >
    <h2
      class="text-title-color text-4xl lg:text-5xl xl:text-6xl font-bold lg:tracking-tight"
    >
      Ready to strengthen that handshake?
    </h2>
    <p class="text-white mt-4 text-lg md:text-xl">
      Let’s create a custom, hand-coded website that helps your business grow.
      Contact us today for a free consultation and see how we can help you
      succeed online.
    </p>
    <div class="flex mt-5">
      <NuxtLink
        class="router-link-active router-link-exact-active rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black hover:bg-gray-800 text-white border-2 border-transparent"
        to="pricing"
        >Get started</NuxtLink
      >
    </div>
  </div>
</template>

<style scoped>
  .text-title-color {
    color: #ffc107;
  }

  .hero-gradient {
    background: linear-gradient(135deg, #7c3aed, #a855f7, #d8b4fe);
  }
</style>
