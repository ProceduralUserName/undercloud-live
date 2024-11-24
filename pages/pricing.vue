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
      "$50/mo unlimited edits package",
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
      "Unlimited Edits",
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
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Pricing</template>
      <template v-slot:desc
        >Simple & Predictable pricing. No Surprises.</template
      >
    </LandingSectionhead>

    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-screen-lg mt-12">
      <LandingPricing v-for="item of pricing" :plan="item" />
    </div>
  </LandingContainer>
</template>
