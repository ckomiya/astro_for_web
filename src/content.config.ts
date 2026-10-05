import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),

  schema: z.object({
    title: z.string(),

    description: z.string().max(160),

    pubDate: z.coerce.date(),

    isDraft: z.boolean().default(false),

    category: z.enum([
      'Tech',
      'Lifestyle',
      'News'
    ]),

    tags: z.array(z.string()).optional(),

    author: reference('authors'),
  }),
});

const authorsCollection = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),

  schema: z.object({
    name: z.string(),
    bio: z.string(),
    role: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  authors: authorsCollection,
};
