<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingHero></LandingHero>
    <LandingFeatures></LandingFeatures>
    <LandingLogos></LandingLogos>
    <LandingCta></LandingCta>
  </LandingContainer>
</template>

<style scoped>
/* Ensure child components are layered correctly */
.main {
  position: relative;
}
</style>
