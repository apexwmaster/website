/**
 * Data fetching utilities with Sanity + static fallback
 * Tries to fetch from Sanity first, falls back to static data if unavailable
 */

import {
  getProjects as getSanityProjects,
  getProjectBySlug as getSanityProjectBySlug,
  getProjectSlugs as getSanityProjectSlugs,
  getTeamMembers as getSanityTeamMembers,
  getClientCategories as getSanityClientCategories,
  getOfficeLocations as getSanityOfficeLocations,
  getProjectCategories as getSanityProjectCategories,
  getProcessSteps as getSanityProcessSteps,
} from './fetch'
import { urlFor } from './image'

// Static data imports (fallbacks)
import { projects as staticProjects } from '@/components/projects/project-data'
import { teamMembers as staticTeamMembers } from '@/components/about/team/team-data'
import { clientCategories as staticClientCategories } from '@/components/experience/clients/clients-data'
import { officeLocations as staticOfficeLocations } from '@/components/about/locations/locations-data'
import { projectCategories as staticProjectCategories } from '@/components/experience/projects/projects-data'
import { processSteps as staticProcessSteps } from '@/components/home/process/process-data'

// Helper to get image URL (handles both Sanity images and static paths)
export function getImageUrl(image: unknown, width?: number): string {
  if (!image) return ''

  // If it's a string, it's a static path
  if (typeof image === 'string') {
    return image
  }

  // If it's a Sanity image object
  if (typeof image === 'object' && image !== null && 'asset' in image) {
    const builder = urlFor(image as Parameters<typeof urlFor>[0])
    if (width) {
      return builder.width(width).url()
    }
    return builder.url()
  }

  return ''
}

// Projects
export async function getProjects() {
  try {
    const sanityProjects = await getSanityProjects()
    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects.map((p) => ({
        slug: p.slug,
        location: p.location,
        title: p.title,
        description: p.description,
        image: getImageUrl(p.image, 800),
        servicesCompleted: p.servicesCompleted,
        client: p.client,
        year: p.year,
        duration: p.duration,
        fullDescription: p.fullDescription,
        highlights: p.highlights,
        gallery: p.gallery?.map((g) => ({
          src: getImageUrl(g.image, 1200),
          alt: g.alt,
        })),
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch projects from Sanity, using static data:', error)
  }
  return staticProjects
}

export async function getProjectBySlug(slug: string) {
  try {
    const project = await getSanityProjectBySlug(slug)
    if (project) {
      return {
        slug: project.slug,
        location: project.location,
        title: project.title,
        description: project.description,
        image: getImageUrl(project.image, 1200),
        servicesCompleted: project.servicesCompleted,
        client: project.client,
        year: project.year,
        duration: project.duration,
        fullDescription: project.fullDescription,
        highlights: project.highlights,
        gallery: project.gallery?.map((g) => ({
          src: getImageUrl(g.image, 1200),
          alt: g.alt,
        })),
      }
    }
  } catch (error) {
    console.warn('Failed to fetch project from Sanity, using static data:', error)
  }
  return staticProjects.find((p) => p.slug === slug) || null
}

export async function getProjectSlugs() {
  try {
    const slugs = await getSanityProjectSlugs()
    if (slugs && slugs.length > 0) {
      return slugs
    }
  } catch (error) {
    console.warn('Failed to fetch project slugs from Sanity, using static data:', error)
  }
  return staticProjects.map((p) => p.slug)
}

// Team Members
export async function getTeamMembers() {
  try {
    const members = await getSanityTeamMembers()
    if (members && members.length > 0) {
      return members.map((m) => ({
        name: m.name,
        role: m.role,
        image: getImageUrl(m.image, 400),
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch team members from Sanity, using static data:', error)
  }
  return staticTeamMembers
}

// Client Categories
export async function getClientCategories() {
  try {
    const categories = await getSanityClientCategories()
    if (categories && categories.length > 0) {
      return categories.map((c) => ({
        id: c.id,
        title: c.title,
        icon: c.icon,
        clients: c.clients,
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch client categories from Sanity, using static data:', error)
  }
  return staticClientCategories
}

// Office Locations
export async function getOfficeLocations() {
  try {
    const locations = await getSanityOfficeLocations()
    if (locations && locations.length > 0) {
      return locations.map((l) => ({
        name: l.name,
        address: l.address,
        mapEmbed: l.mapEmbed,
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch office locations from Sanity, using static data:', error)
  }
  return staticOfficeLocations
}

// Experience Project Categories (with projects)
export async function getProjectCategories() {
  try {
    const categories = await getSanityProjectCategories()
    if (categories && categories.length > 0) {
      return categories.map((c) => ({
        id: c.id,
        title: c.title,
        subtitle: c.subtitle,
        icon: c.icon,
        summary: c.summary,
        projects: c.projects.map((p) => ({
          desNo: p.desNo,
          description: p.description,
        })),
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch project categories from Sanity, using static data:', error)
  }
  return staticProjectCategories
}

// Process Steps
export async function getProcessSteps() {
  try {
    const steps = await getSanityProcessSteps()
    if (steps && steps.length > 0) {
      return steps.map((s) => ({
        stepNumber: s.stepNumber,
        title: s.title,
        description: s.description,
        image: getImageUrl(s.image, 800),
      }))
    }
  } catch (error) {
    console.warn('Failed to fetch process steps from Sanity, using static data:', error)
  }
  return staticProcessSteps
}
