import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'processStep',
  title: 'Process Step',
  type: 'document',
  fields: [
    defineField({
      name: 'stepNumber',
      title: 'Step Number',
      type: 'string',
      description: 'The step number displayed on the website. Use two digits for consistent formatting (e.g., "01", "02", "03")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Short title for this step (e.g., "Initial Consultation", "Field Survey")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Detailed explanation of what happens during this step of the process',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'An image that represents this step. Use the hotspot to set the focal point.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order steps appear. Should typically match the step number.',
    }),
  ],
  orderings: [
    {
      title: 'Step Number',
      name: 'stepNumber',
      by: [{ field: 'stepNumber', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      stepNumber: 'stepNumber',
      media: 'image',
    },
    prepare({ title, stepNumber, media }) {
      return {
        title: `${stepNumber}. ${title}`,
        media,
      }
    },
  },
})
