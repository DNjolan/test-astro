import { defineCollection, z } from "astro:content";

const games = defineCollection({
  schema: z.object({
    title: z.string(),
    img: z.string(),
  }),
});

export const collections = { games };