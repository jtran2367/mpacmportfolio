// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://jtran2367.github.io',
  base: '/mpacmportfolio',
  vite: {
    plugins: [tailwindcss()],
  },
});
