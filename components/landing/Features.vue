<script setup>
const features = [
  {
    title: "Hand-Coded Web Design",
    description:
      "We don't use website builders. They're clunky, slow, and filled with bloat. We hand-code your site, ensuring it’s perfectly tailored to your business and built to last.",
    icon: "bx:code-alt",
  },
  {
    title: "Responsive & Mobile-Optimized:",
    description:
      "Your website will seamlessly adjust to any device, providing a smooth and engaging experience for your customers—whether on desktop or mobile.",
    icon: "bx:bxs-devices",
  },
  {
    title: "Built for Local Businesses",
    description:
      "We understand what it takes for local businesses to succeed. Your customers, new or old, will appreciate a quality website. A good site makes it easy for them, and we make it easy for you.",
    icon: "bx:bxs-compass",
  },
  {
    title: "SEO & Performance-Driven",
    description:
      "Our hand-coded websites are built with SEO and speed in mind, ensuring that your site ranks well on search engines and performs at its best.",
    icon: "bx:bxs-search",
  },
  {
    title: "Affordable, Transparent Pricing",
    description:
      "At UnderCloud, hand-crafted sites come at a fair price. No website builders, no hidden fees, no hassle—just clear, upfront pricing and exceptional value.",
    icon: "bx:bxs-dollar-circle",
  },
  {
    title: "Community",
    description:
      "We don’t just build your website and walk away. As our client, you have our total priotity. We offer continuous support and unlimited edits to ensure your site remains up-to-date and performs flawlessly.",
    icon: "bx:bxs-user",
  },
];
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      Your website is your digital handshake
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      The world has gone digital. In this new world, the first thing people will
      see about you is your website. A good website is a strong, firm handshake.
      And just like your handshake, people will judge you by your website.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-black rounded-full p-2 w-8 h-8 shrink-0">
        <Icon class="text-white" :name="item.icon" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
