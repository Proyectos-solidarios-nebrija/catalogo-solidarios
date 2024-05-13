import { z, defineCollection } from 'astro:content'
const proyectosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    year: z.string(),
    webLink: z.optional(z.string()),
    img: z.string()
  })
})
export const collections = {
  proyectos: proyectosCollection
}
