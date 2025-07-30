// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const site = process.env.VERCEL
  ? process.env.VERCEL_ENV === "production"
    ? "https://astro-audionaut.vercel.app"
    : `https://${process.env.VERCEL_URL}`
  : (process.env.SITE ?? "http://localhost:4321");
const base = process.env.BASE || "/";

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()],
  },
});
