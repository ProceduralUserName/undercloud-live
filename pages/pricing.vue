<script setup>
definePageMeta({
  layout: "landing",
});

const pricing = [
  {
    name: "Lump Sum",
    price: "$3400",
    popular: false,
    features: [
      "Development and Design",
      "Branding Package",
      "SEO Optimization",
      "$25/mo Hosting",
      "$100 fee Per Page after 5",
      "$50/mo edits package",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    name: "Monthly",
    price: {
      monthly: "$150",
      annual: "$1750",
      discount: "$50",
      original: "1800",
    },
    popular: true,
    features: [
      "Development and Design",
      "Branding package",
      "SEO Optimization",
      "Hosting Included",
      "$100 fee Per Page after 5",
      "Edits and Support",
      "Lifetime Updates",
    ],
    button: {
      text: "Get Started",
      link: "/contact",
    },
  },
  {
    name: "eCommerce",
    price: "$5k",
    popular: false,
    features: [
      "Custom Shopify Store",
      "Integrated Shipping",
      "Fully Editable in Shopify CMS",
      "Payment integration",
      "Dedicated Account Manager",
      "Initial Product Data Normalization",
    ],
    button: {
      text: "Coming soon",
      link: "/pricing",
    },
  },
];
</script>

<template>
  <LandingContainer class="my-40">
    <LandingSectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc
        >Simple & Predictable pricing. No Surprises.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <div
        v-for="item in pricing"
        :key="item.name"
        :class="[
          'custom-card flex flex-col justify-between p-6',
          { 'popular-card': item.popular },
        ]"
      >
        <div>
          <h3 class="text-lg font-semibold">{{ item.name }}</h3>
          <!-- Handle price display -->
          <p class="text-2xl text-yellow-alt font-bold my-4">
            <template v-if="typeof item.price === 'object'">
              {{ item.price.monthly }} / mo
            </template>
            <template v-else>
              {{ item.price }}
            </template>
          </p>
          <ul class="space-y-2">
            <li v-for="feature in item.features" :key="feature" class="text-sm">
              • {{ feature }}
            </li>
          </ul>
        </div>
        <NuxtLink
          :to="item.button.link"
          class="mt-4 inline-block text-center bg-white text-purple-500 font-medium py-2 px-4 rounded"
        >
          {{ item.button.text }}
        </NuxtLink>
      </div>
    </div>
  </LandingContainer>
</template>

<style scoped>
.custom-card {
  background: linear-gradient(135deg, #7c3aed, #a855f7, #d8b4fe);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.popular-card {
  background: none;
  background-color: #9333ea;
  transform: scale(1.05);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
}

.popular-card:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}

a {
  text-decoration: none;
}

.text-yellow-alt {
  color: #ffc107;
}
</style>
