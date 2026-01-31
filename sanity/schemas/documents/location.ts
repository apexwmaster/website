import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'officeLocation',
  title: 'Office Location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Office Name',
      type: 'string',
      description: 'Name of this office location (e.g., "Fort Wayne - Head Office", "Indianapolis - Branch Office")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Address Display',
      type: 'string',
      description: 'Full street address as it should appear on the website',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mapEmbed',
      title: 'Google Maps Embed URL',
      type: 'url',
      description: 'Go to Google Maps → Share → Embed a map → Copy the src URL from the iframe code',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Controls which office appears first. Lower numbers appear first (e.g., 1 for Head Office).',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
    },
  },
})
