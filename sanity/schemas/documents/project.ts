import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The project name (e.g., "CR 15 Roadway Reconstruction")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'URL-friendly version of the title. Click "Generate" to create from title.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'City and state where the project is located (e.g., "Garrett, Indiana")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'A brief summary shown on project cards and listings (2-3 sentences)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      description: 'The primary image shown on the project card. Use the hotspot to set the focal point for cropping.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'servicesCompleted',
      title: 'Services Completed',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of services APEX provided for this project (e.g., "Topographic Survey", "Right-of-Way Engineering")',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
      description: 'The organization or entity that contracted APEX for this project',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year the project was completed (e.g., "2023" or "2022-2023")',
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'How long the project took (e.g., "6 months", "1 year")',
    }),
    defineField({
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
      rows: 6,
      description: 'Detailed description shown on the project detail page. Include scope, challenges, and outcomes.',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Key achievements or notable aspects of the project, shown as bullet points',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [{ type: 'galleryImage' }],
      description: 'Additional images showcasing the project. Each image needs alt text for accessibility.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      location: 'location',
      media: 'image',
    },
    prepare({ title, location, media }) {
      return {
        title,
        subtitle: location,
        media,
      }
    },
  },
})
