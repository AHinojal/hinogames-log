import { defineCollection } from "astro:content";
import { z } from "astro/zod"; // También valida los datos
import { glob } from "astro/loaders";


const reviews = defineCollection({
    // Para avisar al loader desde donde lee y lo que lee
    loader: glob({ 
        base: './src/content/reviews',
        pattern: '**/*.{md,mdx}'
    }),
    // Similar a una interface
    schema: z.object({
        cover: z.string(),
        title: z.string(),
        platform: z.string(),
        finishedAt: z.coerce.date()
    })
});

export const collections = { reviews }
