import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'experienceProject',
  title: 'Experience Project',
  type: 'document',
  fields: [
    defineField({
      name: 'desNo',
      title: 'Des No. / Client',
      type: 'string',
      description: 'The project designation number (e.g., "Des No. 2301660") or client name (e.g., "City of Fort Wayne")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Brief description of the project scope and location (e.g., "Elkhart County – Bridge No. 385 Replacement")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'projectCategory' }],
      description: 'Select which category this project belongs to: INDOT, LPA, or Local & CCMG',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the display order within the category. Lower numbers appear first. Leave empty for default ordering.',
    }),
  ],
  preview: {
    select: {
      title: 'desNo',
      subtitle: 'description',
      categoryTitle: 'category.title',
    },
    prepare({ title, subtitle, categoryTitle }) {
      return {
        title,
        subtitle: categoryTitle ? `${categoryTitle} — ${subtitle}` : subtitle,
      }
    },
  },
})
