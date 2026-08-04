import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects/' }),
  schema: ({ image }) =>
    z.object({
      // nullable because empty YAML fields (`img:` with no value) parse as null, not undefined
      title: z.string().optional().nullable(),
      description: z.string().optional().nullable(),
      github: z.url().optional().nullable(),
      links: z
        .array(
          z.object({
            display_name: z.string(),
            link: z.url(),
          }),
        )
        .optional()
        .nullable(),
      // resolves the path to an actual asset at build time, so it gets optimized/hashed
      // instead of being served as a raw file out of public/
      img: image().optional().nullable(),
      img_alt: z.string().optional().nullable(),
      tags: z.array(z.string()).optional().nullable(),
      tools: z.array(z.string()).optional().nullable(),
      date: z.union([z.string(), z.number()]).optional().nullable(),
    }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience/' }),
  schema: z.object({
    job_title: z.string().optional().nullable(),
    company_name: z.string().optional().nullable(),
    company_link: z.url().optional().nullable(),
    start_date: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use format YYYY-MM')
      .transform((s) => new Date(`${s}-01T00:00:00Z`)),
    end_date: z
      .string()
      .regex(/^\d{4}-(0[1-9]|1[0-2])$/, 'Use format YYYY-MM')
      .transform((s) => new Date(`${s}-01T00:00:00Z`))
      .optional()
      .nullable(),
    location: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    links: z
      .array(
        z.object({
          display_name: z.string(),
          link: z.url(),
        }),
      )
      .optional()
      .nullable(),
    tags: z.array(z.string()).optional().nullable(),
    tools: z.array(z.string()).optional().nullable(),
  }),
});

export const collections = {
  projects,
  experience,
};
