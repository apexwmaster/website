import { groq } from 'next-sanity'

// Projects
export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    description,
    image,
    servicesCompleted,
    client,
    year
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    location,
    description,
    image,
    servicesCompleted,
    client,
    year,
    duration,
    fullDescription,
    highlights,
    gallery[] {
      image,
      alt
    }
  }
`

export const projectSlugsQuery = groq`
  *[_type == "project" && defined(slug.current)][].slug.current
`

// Team Members
export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    image
  }
`

// Client Categories
export const clientCategoriesQuery = groq`
  *[_type == "clientCategory"] | order(order asc) {
    _id,
    "id": categoryId,
    title,
    icon,
    clients
  }
`

// Office Locations
export const officeLocationsQuery = groq`
  *[_type == "officeLocation"] | order(order asc) {
    _id,
    name,
    address,
    mapEmbed
  }
`

// Experience Project Categories
export const projectCategoriesQuery = groq`
  *[_type == "projectCategory"] | order(order asc) {
    _id,
    "id": categoryId,
    title,
    subtitle,
    icon,
    summary,
    "projects": *[_type == "experienceProject" && references(^._id)] | order(order asc) {
      _id,
      desNo,
      description
    }
  }
`

// Experience Projects by Category
export const experienceProjectsByCategoryQuery = groq`
  *[_type == "experienceProject" && category->categoryId == $categoryId] | order(order asc) {
    _id,
    desNo,
    description
  }
`

// Process Steps
export const processStepsQuery = groq`
  *[_type == "processStep"] | order(stepNumber asc) {
    _id,
    stepNumber,
    title,
    description,
    image
  }
`
