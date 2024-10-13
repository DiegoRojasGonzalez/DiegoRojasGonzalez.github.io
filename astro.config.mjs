import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: "https://diegorojasgonzalez.github.io",
  base: "DiegoRojasGonzalez.github.io",
});
