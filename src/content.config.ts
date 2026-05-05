import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const galleryImage = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
});

const galleries = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/galleries" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    cover: z.string().optional(),
    draft: z.boolean().default(false),
    order: z.number().optional(),
    images: z.array(galleryImage).default([]),
  }),
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/journal" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { galleries, journal };
