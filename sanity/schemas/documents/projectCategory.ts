import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'projectCategory',
  title: 'Experience Project Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main heading for this category (e.g., "INDOT Projects", "LPA Projects")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'string',
      description: 'A unique lowercase identifier (e.g., "indot", "lpa", "local"). Do not change once projects are linked to this category.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A descriptive subtitle shown below the title (e.g., "Notable Field Survey for INDOT Projects")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'INDOT', value: 'indot' },
          { title: 'LPA', value: 'lpa' },
          { title: 'Local', value: 'local' },
        ],
      },
      description: 'Select the icon that represents this project category',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
      description: 'Optional summary text shown at the top of the category (e.g., "Apex completed field survey for nearly 100 projects for INDOT...")',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order categories appear on the Experience page. Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
    },
  },
})
