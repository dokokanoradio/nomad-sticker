// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import serviceWorker from "astrojs-service-worker";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  site: 'https://nomad-sticker.pages.dev',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    serviceWorker(),
    webmanifest({
      name: "ノマドステッカーばくりっこ！",
      icon: "public/android-chrome-512x512.png",
      short_name: "ノマドステッカーばくりっこ！",
      description: "ノマドステッカーをばくりっこするときの補助アプリ！",
      start_url: "https://nomad-sticker.pages.dev",
      theme_color: "#F08648",
      background_color: "#F08648",
      display: "standalone",
    })
  ],
});