<template>
  <LandingNavbar></LandingNavbar>
  <slot></slot>
  <LandingFooter></LandingFooter>
</template>

<script>
export default {
  head() {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "UnderCloud",
      "url": "https://undercloud.pro",
      "logo": "assets/img/logo-color.png",
      "sameAs": [
        // put other areas here (social media etc)
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Customer Service",
        "areaServed": "US, Canada",
        "availableLanguage": ["English"]
      }
    };

    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Undercloud",
      "url": "https://undercloud.pro",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://undercloud.pro/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    return {
      title: "%s - Undercloud",
      meta: [
        // Standard Meta tags for SEO
        { hid: 'description', name: 'description', content: "Creating high-quality, hand-crafted websites that attract and convert customers." },
        { hid: 'keywords', name: 'keywords', content: "Undercloud, web design, small business websites, affordable websites, SEO, hosting services" },
        { hid: 'author', name: 'author', content: 'Undercloud' },

        // Open Graph Tags
        { hid: 'og:title', property: 'og:title', content: "Affordable Websites for Small Businesses - Undercloud" },
        { hid: 'og:description', property: 'og:description', content: "Creating high-quality, hand-crafted websites that attract and convert customers." },
        { hid: 'og:image', property: 'og:image', content: "assets/img/og_image.png" },
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schemaData),
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(websiteSchema),
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        "application/ld+json": ["innerHTML"],
      },
    };
  },
};
</script>
