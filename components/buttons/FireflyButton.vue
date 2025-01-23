<template>
  <div class="firefly-button">
    <NuxtLink :to="destination" class="button-wrapper">
      <span class="dot dot-1"></span>
      <span class="dot dot-2"></span>
      <span class="dot dot-3"></span>
      <span class="dot dot-4"></span>
      <span class="dot dot-5"></span>
      <span class="dot dot-6"></span>
      <span class="dot dot-7"></span>
      <span class="button orange-text-color px-16 py-4 rounded-full uppercase">
        <slot />
      </span>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "FireflyButton",
  props: {
    destination: {
      type: String,
      required: true, // Ensure the `destination` prop is always provided
    },
  },
};
</script>

<style scoped>
html,
body {
  background: black;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.orange-text-color {
  background: #ffc107;
}
/* Styling for the glowing circles */
.circle {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -4px 0 0 -4px;
  pointer-events: none;
  mix-blend-mode: screen;
  z-index: 10;
  box-shadow: 0px 0px 8px 0px #fdfca9 inset, 0px 0px 24px 0px #ffeb3b,
    0px 0px 8px 0px #ffffff42;
}

.button-wrapper {
  position: relative;
}

.button {
  z-index: 1;
  position: relative;
  text-decoration: none;
  text-align: center;
  appearance: none;
  display: inline-block;
}

/* Styling for the button's glowing effect on hover */
.button::before {
  content: "";
  box-shadow: 0px 0px 24px 0px #ffeb3b;
  mix-blend-mode: screen;
  transition: opacity 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 999px;
  opacity: 0;
}

/* Additional glowing effect for the button */
.button::after {
  content: "";
  box-shadow: 0px 0px 23px 0px #fdfca9 inset, 0px 0px 8px 0px #ffffff42;
  transition: opacity 0.3s;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 999px;
  opacity: 0;
}

.button-wrapper:hover {
  .button::before,
  .button::after {
    opacity: 1;
  }

  .dot {
    transform: translate(0, 0) rotate(var(--rotatation));
  }

  .dot::after {
    animation-play-state: running;
  }
}

/* Styling for individual dots */
.dot {
  display: block;
  position: absolute;
  transition: transform calc(var(--speed) / 12) ease;
  width: var(--size);
  height: var(--size);
  transform: translate(var(--starting-x), var(--starting-y))
    rotate(var(--rotatation));
}

.dot::after {
  content: "";
  animation: hoverFirefly var(--speed) infinite,
    dimFirefly calc(var(--speed) / 2) infinite calc(var(--speed) / 3);
  animation-play-state: paused;
  display: block;
  border-radius: 100%;
  background: yellow;
  width: 100%;
  height: 100%;
  box-shadow: 0px 0px 6px 0px #ffeb3b, 0px 0px 4px 0px #fdfca9 inset,
    0px 0px 2px 1px #ffffff42;
}

.dot-1 {
  --rotatation: 0deg;
  --speed: 14s;
  --size: 6px;
  --starting-x: 30px;
  --starting-y: 20px;
  top: 4px;
  left: -18px;
  opacity: 0.7;
}

.dot-2 {
  --rotatation: 122deg;
  --speed: 16s;
  --size: 3px;
  --starting-x: 40px;
  --starting-y: 10px;
  top: 1px;
  left: 0px;
  opacity: 0.7;
}

.dot-3 {
  --rotatation: 39deg;
  --speed: 20s;
  --size: 4px;
  --starting-x: -10px;
  --starting-y: 20px;
  top: -8px;
  right: 14px;
}

.dot-4 {
  --rotatation: 220deg;
  --speed: 18s;
  --size: 2px;
  --starting-x: -30px;
  --starting-y: -5px;
  bottom: 10px;
  right: -24px;
  opacity: 0.9;
}

.dot-5 {
  --rotatation: 190deg;
  --speed: 22s;
  --size: 5px;
  --starting-x: -40px;
  --starting-y: -20px;
  bottom: -12px;
  right: -6px;
}

.dot-6 {
  --rotatation: 20deg;
  --speed: 15s;
  --size: 4px;
  --starting-x: 12px;
  --starting-y: -18px;
  bottom: -24px;
  left: 60px;
  opacity: 0.7;
}

.dot-7 {
  --rotatation: 300deg;
  --speed: 19s;
  --size: 3px;
  --starting-x: 6px;
  --starting-y: -20px;
  bottom: -26px;
  left: 64px;
}

/* Keyframe animations */
@keyframes dimFirefly {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.8;
  }
  75% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes hoverFirefly {
  0% {
    transform: translate(0, 0);
  }
  12% {
    transform: translate(6px, 2px);
  }
  24% {
    transform: translate(-4px, 6px);
  }
  37% {
    transform: translate(4px, -4px);
  }
  55% {
    transform: translate(-2px, 0);
  }
  74% {
    transform: translate(0, 4px);
  }
  88% {
    transform: translate(-6px, -2px);
  }
  100% {
    transform: translate(0, 0);
  }
}
</style>
