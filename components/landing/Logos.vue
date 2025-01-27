<template>
  <div class="mt-24 py-10 bg-black rounded-lg">
    <h2 class="text-center text-4xl lg:text-5xl font-bold text-white">
      We use cutting-edge technology, the best of the best
    </h2>
    <div
      class="flex gap-8 md:gap-20 items-center justify-center mt-10 flex-wrap"
    >
      <div class="relative group">
        <Icon
          class="h-8 md:h-14 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:nuxtdotjs"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-lg text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >Nuxt.js</span
        >
      </div>
      <div class="relative group">
        <Icon
          class="h-8 md:h-14 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:tailwindcss"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >Tailwind CSS</span
        >
      </div>
      <div class="relative group">
        <Icon
          class="h-8 md:h-14 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:vuedotjs"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >Vue.js</span
        >
      </div>
      <div class="relative group">
        <Icon
          class="h-8 md:h-14 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:html5"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >HTML5</span
        >
      </div>
      <div class="relative group">
        <Icon
          class="h-8 md:h-12 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:javascript"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >JavaScript</span
        >
      </div>
      <div class="relative group">
        <Icon
          class="h-8 md:h-12 text-purple-500 text-logo-color transition-transform transform group-hover:scale-105"
          name="simple-icons:github"
          size="48"
        />
        <span
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity"
          >GitHub</span
        >
      </div>
    </div>
  </div>
</template>

<style>
.text-logo-color:hover {
  color: #ffc107;
}
</style>
