// @ts-check
// @ts-ignore
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://drew-pi.github.io/",
  base: "apbugs",
  output: "static",
  integrations: [react()],
});
