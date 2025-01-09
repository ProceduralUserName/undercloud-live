<script setup>
  definePageMeta({
    layout: "landing",
  });

  const TeamImg3 = "/simon.JPEG";
  const TeamImg2 = "/simonSurf.jpg";
  const TeamImg1 = "/simonTravel.jpeg";

  const team = [
    {
      name: "Traveler",
      title: "Europe",
      avatar: {
        src: TeamImg1,
        width: 480,
        height: 560,
      },
      txtBlock:
        "I solo traveled across America, camping, mountain biking, and experiencing life. When I returned, I worked for my father's business in the trades.",
    },
    {
      name: "Adventurer",
      title: "Costa Rica",
      avatar: {
        src: TeamImg2,
        width: 580,
        height: 580,
      },
      txtBlock:
        "Since then I've continued to travel. I've been to many countries, seen many cultures. Haiti, Spain, Portugal, England, across America and back. I've jumped out of airplanes, snowboarded down enormous mountains, and biked through the legendary 'Ribcage' of the Colorado Desert.",
    },
    {
      name: "Developer",
      title: "Home",
      avatar: {
        src: TeamImg3,
        width: 580,
        height: 580,
      },
      txtBlock:
        "In 2022, I discovered a passion for coding while studying in my father’s hometown. Armed with new skills, I started my own business designing websites.",
    },
  ];
</script>

<template>
  <LandingContainer>
    <!-- Hero Section -->
    <div class="hero-section text-center py-12 text-white rounded-lg shadow-lg">
      <h1 class="text-4xl text-yellow-alt font-bold">Hi! &#x1F44B I'm Simon</h1>
      <p class="text-lg mt-2">
        I'm a young entrepreneur looking to build a business and a name.
      </p>
    </div>

    <!-- About Section -->
    <div class="flex flex-col gap-6 mx-auto max-w-4xl mt-12">
      <h2 class="font-bold text-3xl text-gray-800 text-center">About Me</h2>
      <p class="text-lg leading-relaxed text-gray-700 text-center">
        Born and raised in Connecticut, I’ve lived in North Haven for 8 years.
        After graduating high school, I didn’t have much of a plan beyond the
        urge to travel.
      </p>
    </div>

    <!-- Team Section -->
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <div
        v-for="(member, index) in team"
        :key="index"
        class="team-card p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition"
      >
        <img
          :src="member.avatar.src"
          :alt="member.name"
          class="w-full h-56 object-cover rounded-md mb-4"
        />
        <h3 class="text-xl font-semibold text-gray-800">{{ member.name }}</h3>
        <h4 class="text-sm text-purple-500">{{ member.title }}</h4>
        <p class="text-gray-600 mt-2">{{ member.txtBlock }}</p>
      </div>
    </div>
  </LandingContainer>
</template>

<style scoped>
  .hero-section {
    background: linear-gradient(135deg, #7c3aed, #a855f7);
    padding-top: 100px;
  }

  .team-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .team-card:hover {
    transform: translateY(-5px);
  }

  .team-card img {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .team-card:hover img {
    transform: scale(1.05);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
  .text-yellow-alt {
    color: #ffc107;
  }
</style>
