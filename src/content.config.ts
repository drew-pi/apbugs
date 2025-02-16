import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects/" }),
  schema: z.object({ // have to add nullable to everything because of the way yaml works with empty fields
    title: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    github: z.string().url().optional().nullable(),
    links: z.array(
      z.object({
        display_name: z.string(),
        link: z.string().url()
      })
    ).optional().nullable(), // Allow an empty array or missing field
    img: z.string().optional().nullable(), // Allow empty or missing
    img_alt: z.string().optional().nullable(),
    tags: z.array(z.string()).optional().nullable(),
    tools: z.array(z.string()).optional().nullable(),
    date: z.union([z.string(), z.number()]).optional().nullable() // Accepts both "2024" and 2024
  })
});

export const collections = {
  projects
};
