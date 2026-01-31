import { client } from './client'
import {
  projectsQuery,
  projectBySlugQuery,
  projectSlugsQuery,
  teamMembersQuery,
  clientCategoriesQuery,
  officeLocationsQuery,
  projectCategoriesQuery,
  experienceProjectsByCategoryQuery,
  processStepsQuery,
} from './queries'
import type {
  SanityProject,
  SanityTeamMember,
  SanityClientCategory,
  SanityOfficeLocation,
  SanityProjectCategory,
  SanityExperienceProject,
  SanityProcessStep,
} from './types'

// Projects
export async function getProjects(): Promise<SanityProject[]> {
  return client.fetch(projectsQuery)
}

export async function getProjectBySlug(
  slug: string
): Promise<SanityProject | null> {
  return client.fetch(projectBySlugQuery, { slug })
}

export async function getProjectSlugs(): Promise<string[]> {
  return client.fetch(projectSlugsQuery)
}

// Team Members
export async function getTeamMembers(): Promise<SanityTeamMember[]> {
  return client.fetch(teamMembersQuery)
}

// Client Categories
export async function getClientCategories(): Promise<SanityClientCategory[]> {
  return client.fetch(clientCategoriesQuery)
}

// Office Locations
export async function getOfficeLocations(): Promise<SanityOfficeLocation[]> {
  return client.fetch(officeLocationsQuery)
}

// Experience Project Categories
export async function getProjectCategories(): Promise<SanityProjectCategory[]> {
  return client.fetch(projectCategoriesQuery)
}

// Experience Projects by Category
export async function getExperienceProjectsByCategory(
  categoryId: string
): Promise<SanityExperienceProject[]> {
  return client.fetch(experienceProjectsByCategoryQuery, { categoryId })
}

// Process Steps
export async function getProcessSteps(): Promise<SanityProcessStep[]> {
  return client.fetch(processStepsQuery)
}
