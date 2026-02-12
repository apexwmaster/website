import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Full name including any professional designations (e.g., "John Smith, PS" or "Jane Doe, PE")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'Job title or position at APEX (e.g., "President/Partner", "Survey Manager")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Team category this member belongs to',
      options: {
        list: [
          { title: 'Owners', value: 'Owners' },
          { title: 'Business Development', value: 'Business Development' },
          { title: 'Survey Team', value: 'Survey Team' },
          { title: 'Engineering Team', value: 'Engineering Team' },
          { title: 'Inspection Team', value: 'Inspection Team' },
          { title: 'Admin', value: 'Admin' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      description: 'Professional headshot photo. Use the hotspot to ensure face is centered when cropped.',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls the order team members appear within their category. Lower numbers appear first.',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
})
