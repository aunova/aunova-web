import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    updateDate: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    category: z.enum(['technical', 'business', 'news']).default('technical'),
    tags: z.array(z.string()).optional(),
    author: z.string().default('Aunova Team'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  'blog': blogCollection,
};
