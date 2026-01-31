import type { Image } from 'sanity'

export interface SanityProject {
  _id: string
  title: string
  slug: string
  location: string
  description: string
  image: Image
  servicesCompleted: string[]
  client?: string
  year?: string
  duration?: string
  fullDescription?: string
  highlights?: string[]
  gallery?: {
    image: Image
    alt: string
  }[]
}

export interface SanityTeamMember {
  _id: string
  name: string
  role: string
  image: Image
}

export interface SanityClientCategory {
  _id: string
  id: string
  title: string
  icon: 'government' | 'engineering' | 'contractors'
  clients: string[]
}

export interface SanityOfficeLocation {
  _id: string
  name: string
  address: string
  mapEmbed: string
}

export interface SanityExperienceProject {
  _id: string
  desNo: string
  description: string
}

export interface SanityProjectCategory {
  _id: string
  id: string
  title: string
  subtitle: string
  icon: 'indot' | 'lpa' | 'local'
  summary?: string
  projects: SanityExperienceProject[]
}

export interface SanityProcessStep {
  _id: string
  stepNumber: string
  title: string
  description: string
  image: Image
}
