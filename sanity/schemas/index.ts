// Document schemas
import project from './documents/project'
import teamMember from './documents/teamMember'
import clientCategory from './documents/clientCategory'
import officeLocation from './documents/location'
import projectCategory from './documents/projectCategory'
import processStep from './documents/processStep'
import experienceProject from './documents/experienceProject'

// Object schemas
import galleryImage from './objects/galleryImage'

export const schemaTypes = [
  // Documents
  project,
  teamMember,
  clientCategory,
  officeLocation,
  projectCategory,
  processStep,
  experienceProject,
  // Objects
  galleryImage,
]
