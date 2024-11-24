<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-125"
        src="~/assets/img/logo-color.png"
        alt="Starship starts the engine"
        loading="eager"
        format="avif"
        width="1012"
        height="1012"
      />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight">
        Hand-coded.<br />
        Your business.<br />
        Your website.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        UnderCloud is a web design agency in North Haven Connecticut specialized
        in creating high-quality, hand-crafted websites that attract and convert
        customers. Empower your business with a powerful online presence.
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
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
