# UnderCloud - UnderCloud is a web design agency in North Haven Connecticut

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Attributions

Original Astroship Template: **[https://astroship.web3templates.com/](https://astroship.web3templates.com/)** from **[Web3Templates](https://web3templates.com/)**

Forked from: **[https://github.com/surjithctly/astroship](https://github.com/surjithctly/astroship)**

# 🚀 Setting Up a New Nuxt Project

This guide walks you through creating a new **Nuxt project** with **Tailwind CSS, ShadCN, and the necessary modules**.

---

## 📌 1. Create a New Nuxt Project

Run the following commands in order:

```sh
npx nuxi@latest init <project-name>
cd <project-name>
```

---

## 🎨 2. Add the Nuxt UI Module

```sh
npx nuxi@latest module add ui
```

---

## 🎨 3. Configure Tailwind CSS

### Modify `nuxt.config.ts` to include TailwindCSS:

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
});
```

### Initialize TailwindCSS:

```sh
npx tailwindcss init
```

### Create `assets/css/tailwind.css` and add:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🎭 4. Add ShadCN to Nuxt

```sh
npx nuxi@latest module add shadcn-nuxt
npx nuxi prepare
npx shadcn-vue@latest init
```

---

## 🎮 5. Add the Nuxt Image Module

```sh
npx nuxi@latest module add image
```

---

## 👤 6. Set Up Project Structure

Run the following commands to create necessary folders:

```sh
mkdir -p pages components/ui
touch pages/index.vue
```

---

## 📝 7. Modify `app.vue`

Replace the contents of `app.vue` with:

```vue
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

---

## 🛠️ 8. Configure ShadCN in `nuxt.config.ts`

Modify `nuxt.config.ts` to include ShadCN:

```ts
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  shadcn: {
    /**
     * Prefix for all the imported components
     */
    prefix: "",
    /**
     * Directory where the components are stored
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
```

---

## ✅ Final Steps

Now your **Nuxt project** is fully set up with:

✅ **TailwindCSS**  
✅ **ShadCN UI Components**  
✅ **Nuxt Image Optimization**

You're now ready to start building your app! 🚀  
Happy coding! 🎉
