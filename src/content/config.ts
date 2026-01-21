import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
	}),
});

const books = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        author: z.string(),
        description: z.string(),
        coverImage: z.string().optional(),
        pubDate: z.coerce.date(),
        // Interpretation Fields
        coreIdea: z.string(),
        quotes: z.array(z.string()),
        practicalGuidance: z.object({
            society: z.string(),
            learning: z.string(),
            work: z.string(),
        }),
    }),
});

export const collections = { blog, books };
