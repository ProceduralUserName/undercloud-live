<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <div class="bg-black">
    <LandingContainer>
      <LandingHero></LandingHero>
      <LandingFeatures></LandingFeatures>
      <LandingLogos></LandingLogos>
      <LandingCta></LandingCta>
    </LandingContainer>
  </div>
</template>

<style scoped>
/* Ensure child components are layered correctly */
.main {
  position: relative;
}
</style>
