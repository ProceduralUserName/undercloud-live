<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer class="pt-6 pb-10">
    <LandingSectionhead>
      <template v-slot:title>Contact</template>
      <template v-slot:desc>I'm here to help!</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-screen-lg mt-12">
      <!-- Left Section -->
      <div
        class="custom-card p-6 bg-gradient-to-r from-purple-600 to-orange-500"
      >
        <h2
          class="text-3xl lg:text-4xl xl:text-5xl font-bold lg:tracking-tight text-yellow-alt"
        >
          Schedule your free consultation now!
        </h2>
        <p class="text-lg leading-relaxed text-white mt-3">
          No cost, just talk. Sit down with me and we'll talk about your
          business, what it needs, and what I provide.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-200">
            <Icon class="text-yellow-alt w-4 h-4" name="uil:map-marker" />
            <span>North Haven, Connecticut, United States</span>
          </div>
          <div class="flex items-center mt-2 space-x-2 text-gray-200">
            <Icon class="text-yellow-alt w-4 h-4" name="uil:envelope" />
            <a href="mailto:jakobaichmayr@gmail.com" class="hover:underline"
              >contact@undercloud.pro</a
            >
          </div>
        </div>
      </div>

      <!-- Right Section -->
      <div class="custom-card p-6">
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>

<style scoped>
.custom-card {
  background-color: #a855f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

a {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.text-yellow-alt {
  color: #ffc107;
}
</style>
