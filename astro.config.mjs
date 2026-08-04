// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import mdx from '@astrojs/mdx';
import remarkBaseUrl from './src/lib/remark-base-url.mjs';

const base = '/apbugs';

// https://astro.build/config
export default defineConfig({
  site: 'https://drew-pi.github.io',
  base,
  integrations: [mdx()],
  markdown: {
    processor: unified({
      remarkPlugins: [[remarkBaseUrl, base]],
    }),
  },
});
