<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>I'm here to help!</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          Schedule your free consultation now!
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          No cost, just talk. Sit down with me and we'll talk about your
          business, what it needs, and what I provide.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:map-marker" />
            <span>North Haven Connecticut, United State of America</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:envelope" /><a
              href="mailto:jakobaichmayr@gmail.com"
              >admin@undercloud.pro</a
            >
          </div>
          <!-- <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:phone" /><a
              href="tel:+1 (234) 5678 999"
              >+1 (234) 5678 999</a
            >
          </div> -->
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
