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
      "Since then I've continued to travel. I've been to many countries, seen many cultures. Haiti, Spain, Portugal, England, across America and back. I've jumped out of airplanes, snowboarded down enourmous mountains, and biked through the legendary \"Ribcage\" of the Colorado Desert.",
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
      " In 2022 I discovered a passion for coding when I started school in my fathers hometown. After years of study and armed with my new skills, I started my own business designing websites.",
  },
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Hi! I'm Simon</template>
      <template v-slot:desc
        >I'm a young entreprenuer looking to build a business, and a
        name.</template
      >
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">About me</h2>
      <p class="text-lg leading-relaxed text-slate-500">
        Born and raised in Connecticut, I've lived in North Haven for 8 years.
        After graduating highschool, I didn't have much of a plan beyond the
        urge to travel.
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div class="group">
        <div class="w-full aspect-square">
          <img
            :src="team[0].avatar.src"
            :width="team[0].avatar.width"
            :height="team[0].avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ team[0].name }}</h2>
          <h3 class="text-sm text-slate-500">{{ team[0].title }}</h3>
        </div>
      </div>
      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16 col-span-2">
        <p class="text-lg leading-relaxed text-slate-500">
          {{ team[0].txtBlock }}
        </p>
      </div>
      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16 col-span-2">
        <p class="text-lg leading-relaxed text-slate-500">
          {{ team[1].txtBlock }}
        </p>
      </div>
      <div class="group">
        <div class="w-full aspect-square">
          <img
            :src="team[1].avatar.src"
            :width="team[1].avatar.width"
            :height="team[1].avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ team[1].name }}</h2>
          <h3 class="text-sm text-slate-500">{{ team[1].title }}</h3>
        </div>
      </div>

      <div class="group">
        <div class="w-full aspect-square">
          <img
            :src="team[2].avatar.src"
            :width="team[2].avatar.width"
            :height="team[2].avatar.height"
            format="avif"
            alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl"
          />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ team[2].name }}</h2>
          <h3 class="text-sm text-slate-500">{{ team[2].title }}</h3>
        </div>
      </div>
      <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16 col-span-2">
        <p class="text-lg leading-relaxed text-slate-500">
          {{ team[2].txtBlock }}
        </p>
      </div>
    </div>
  </LandingContainer>
</template>
