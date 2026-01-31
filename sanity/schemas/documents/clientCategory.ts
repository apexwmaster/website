import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'clientCategory',
  title: 'Client Category',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The category heading shown on the website (e.g., "State and Local Agencies")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryId',
      title: 'Category ID',
      type: 'string',
      description: 'A unique lowercase identifier used internally (e.g., "government", "engineering", "contractors"). Do not change once set.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Type',
      type: 'string',
      options: {
        list: [
          { title: 'Government', value: 'government' },
          { title: 'Engineering', value: 'engineering' },
          { title: 'Contractors', value: 'contractors' },
        ],
      },
      description: 'Select the icon that best represents this client category',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clients',
      title: 'Clients',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of client names in this category. Add one client per line.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls which category appears first on the page. Lower numbers appear first.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      clients: 'clients',
    },
    prepare({ title, clients }) {
      return {
        title,
        subtitle: `${clients?.length || 0} clients`,
      }
    },
  },
})
