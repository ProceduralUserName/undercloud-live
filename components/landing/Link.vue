<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?:
    | "outline"
    | "primary"
    | "inverted"
    | "muted"
    | "primary2"
    | "outline2";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const styles = {
  outline: "bg-white border-2 border-black hover:bg-gray-100 text-black",
  primary:
    "bg-black text-white hover:bg-amber-500 hover:text-black  border-2 border-transparent",
  outline2: "bg-amber-500 border-2 border-black hover:bg-gray-100 text-black",
  primary2:
    "bg-purple-600 text-white hover:border-amber-500 hover:border-1  border-2 border-transparent",
  inverted: "bg-white text-black border-2 border-transparent",
  muted: "bg-gray-100 hover:bg-gray-200 border-2 border-transparent",
};
</script>

<template>
  <NuxtLink
    :href="href"
    :class="[
      'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200',
      block && 'w-full',
      sizes[size],
      styles[styleName],
    ]"
    ><slot />
  </NuxtLink>
</template>
