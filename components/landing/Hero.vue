<template>
  <main
    :class="[
      'w-full grid lg:grid-cols-2 items-center h-screen',
      backgroundColor
    ]"
  >
    <div class="p-4 md:p-8 md:order-1 hidden md:block">
      <div class="relative max-w-[600px] w-full aspect-square overflow-hidden rounded-full mx-auto">
        <img
          class="transition-transform transform hover:scale-125 w-full h-full object-cover"
          src="~/assets/img/logo-color.png"
          alt="Starship starts the engine"
          loading="eager"
          format="avif"
        />
      </div>
    </div>

    <div class="px-4 md:px-8 text-center lg:text-left">
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-yellow-alt">
        Hand-coded.<br />
        Your business.<br />
        Your website.
      </h1>
      <p class="text-lg mt-4 max-w-xl mx-auto lg:mx-0 text-white">
        UnderCloud is a web design agency in North Haven Connecticut specialized
        in creating high-quality, hand-crafted websites that attract and convert
        customers. Empower your business with a powerful online presence.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
        <NuxtLink
          class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-black text-white hover:bg-gray-800 border-2 border-transparent"
          to="pricing"
          >Get Started</NuxtLink
        >
        <NuxtLink
          class="rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200 px-5 py-2.5 bg-white border-2 border-black hover:bg-gray-100 text-black"
          to="about"
        >
          Why Us?
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: "bg-purple-500", 
    },
  },
};
</script>

<style scoped>
.text-yellow-alt {
  color: #FFC107
}
.text-purple-alt {
  color: #9f7aea
}
</style>
