import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    description: z.string(),
    isDraft: z.boolean().default(false),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    img_logo: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    github: z.string(),
    website: z.string().optional(),
    technologies: z.array(z.object({
      name: z.string(),
      route: z.string(),
    })),
  }),
});

const jobsCollection = defineCollection({
  type: "data",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    url: z.string(),
    logo: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    city: z.string(),
    country: z.string(),
    roles: z.array(
      z.object({
        role: z.string(),
        startDate: z.string(),
        endDate: z.string(),
        achievements: z.array(z.string()),
      })
    ),
  }),
});

export const collections = { projects: projectsCollection, jobs: jobsCollection};