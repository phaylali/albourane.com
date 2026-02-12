import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'page',
      source: 'blog/**',
      schema: z.object({
        title: z.string(),
        date: z.date(),
        summary: z.string().optional(),
        description: z.string().optional(),
        banner: z.string().optional(),
        image: z.string().optional(),
        images: z.array(z.string()).optional(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().optional(),
        lastmod: z.string().optional(),
        author: z.string().optional(),
        categories: z.array(z.string()).optional(),
        excerpt: z.string().optional(),
      })
    })
  }
})
