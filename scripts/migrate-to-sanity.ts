/**
 * Migration script to import existing data into Sanity
 *
 * Prerequisites:
 * 1. Create a Sanity API token with write access:
 *    - Go to https://sanity.io/manage
 *    - Select your project → API → Tokens → Add API Token
 *    - Give it "Editor" permissions
 *
 * 2. Add to your .env.local:
 *    SANITY_API_TOKEN=your_token_here
 *
 * 3. Run the script:
 *    npx tsx scripts/migrate-to-sanity.ts
 */

import { config } from 'dotenv';
// Load environment variables from .env.local and .env
config({ path: '.env.local' });
config({ path: '.env' });

import { createClient } from '@sanity/client';
import { createReadStream } from 'fs';
import path from 'path';

// Import existing data
import { teamMembers } from '../components/about/team/team-data';
import { clientCategories } from '../components/experience/clients/clients-data';
import { officeLocations } from '../components/about/locations/locations-data';
import { projectCategories } from '../components/experience/projects/projects-data';
import { processSteps } from '../components/home/process/process-data';
import { projects } from '../components/projects/project-data';

// Initialize Sanity client with write token
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Helper to delete all documents of a given type
async function deleteAllOfType(type: string) {
  const count = await client.fetch<number>(`count(*[_type == "${type}"])`);
  if (count > 0) {
    console.log(`  Deleting ${count} existing ${type} documents...`);
    await client.delete({ query: `*[_type == "${type}"]` });
  }
}

// Helper to upload an image and return the asset reference
async function uploadImage(
  imagePath: string
): Promise<{
  _type: 'image';
  asset: { _type: 'reference'; _ref: string };
} | null> {
  try {
    // Remove leading slash and construct full path
    const relativePath = imagePath.startsWith('/')
      ? imagePath.slice(1)
      : imagePath;
    const fullPath = path.join(process.cwd(), 'public', relativePath);

    console.log(`  Uploading image: ${relativePath}`);

    const imageAsset = await client.assets.upload(
      'image',
      createReadStream(fullPath),
      {
        filename: path.basename(fullPath),
      }
    );

    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: imageAsset._id,
      },
    };
  } catch (error) {
    console.error(`  Failed to upload image ${imagePath}:`, error);
    return null;
  }
}

// Migration functions
async function migrateTeamMembers() {
  console.log('\n📋 Migrating Team Members...');
  await deleteAllOfType('teamMember');

  for (let i = 0; i < teamMembers.length; i++) {
    const member = teamMembers[i];
    console.log(`  ${i + 1}/${teamMembers.length}: ${member.name}`);

    const image = member.image ? await uploadImage(member.image) : null;

    await client.create({
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      category: member.category,
      ...(image ? { image } : {}),
      order: i + 1,
    });
  }

  console.log(`✅ Migrated ${teamMembers.length} team members`);
}

async function migrateClientCategories() {
  console.log('\n📋 Migrating Client Categories...');
  await deleteAllOfType('clientCategory');

  for (let i = 0; i < clientCategories.length; i++) {
    const category = clientCategories[i];
    console.log(
      `  ${i + 1}/${clientCategories.length}: ${category.title}`
    );

    await client.create({
      _type: 'clientCategory',
      title: category.title,
      categoryId: category.id,
      icon: category.icon,
      clients: category.clients,
      order: i + 1,
    });
  }

  console.log(
    `✅ Migrated ${clientCategories.length} client categories`
  );
}

async function migrateOfficeLocations() {
  console.log('\n📋 Migrating Office Locations...');
  await deleteAllOfType('officeLocation');

  for (let i = 0; i < officeLocations.length; i++) {
    const location = officeLocations[i];
    console.log(
      `  ${i + 1}/${officeLocations.length}: ${location.name}`
    );

    await client.create({
      _type: 'officeLocation',
      name: location.name,
      address: location.address,
      mapEmbed: location.mapEmbed,
      order: i + 1,
    });
  }

  console.log(
    `✅ Migrated ${officeLocations.length} office locations`
  );
}

async function migrateProjectCategories() {
  console.log('\n📋 Migrating Experience Project Categories...');
  await deleteAllOfType('experienceProject');
  await deleteAllOfType('projectCategory');

  const categoryRefs: Record<string, string> = {};

  for (let i = 0; i < projectCategories.length; i++) {
    const category = projectCategories[i];
    console.log(
      `  ${i + 1}/${projectCategories.length}: ${category.title}`
    );

    const doc = await client.create({
      _type: 'projectCategory',
      title: category.title,
      categoryId: category.id,
      subtitle: category.subtitle,
      icon: category.icon,
      summary: category.summary,
      order: i + 1,
    });

    categoryRefs[category.id] = doc._id;
  }

  console.log(
    `✅ Migrated ${projectCategories.length} project categories`
  );

  // Now migrate the experience projects
  console.log('\n📋 Migrating Experience Projects...');

  let projectCount = 0;
  for (const category of projectCategories) {
    const categoryRef = categoryRefs[category.id];

    for (let i = 0; i < category.projects.length; i++) {
      const project = category.projects[i];
      projectCount++;

      await client.create({
        _type: 'experienceProject',
        desNo: project.desNo,
        description: project.description,
        category: {
          _type: 'reference',
          _ref: categoryRef,
        },
        order: i + 1,
      });
    }

    console.log(
      `  ${category.title}: ${category.projects.length} projects`
    );
  }

  console.log(`✅ Migrated ${projectCount} experience projects`);
}

async function migrateProcessSteps() {
  console.log('\n📋 Migrating Process Steps...');
  await deleteAllOfType('processStep');

  for (let i = 0; i < processSteps.length; i++) {
    const step = processSteps[i];
    console.log(`  ${i + 1}/${processSteps.length}: ${step.title}`);

    const image = await uploadImage(step.image);

    await client.create({
      _type: 'processStep',
      stepNumber: step.stepNumber,
      title: step.title,
      description: step.description,
      image,
      order: i + 1,
    });
  }

  console.log(`✅ Migrated ${processSteps.length} process steps`);
}

async function migrateProjects() {
  console.log('\n📋 Migrating Showcase Projects...');
  await deleteAllOfType('project');

  for (let i = 0; i < projects.length; i++) {
    const project = projects[i];
    console.log(`  ${i + 1}/${projects.length}: ${project.title}`);

    const mainImage = project.image
      ? await uploadImage(project.image)
      : null;

    // Upload gallery images
    const gallery = [];
    if (project.gallery) {
      for (const galleryItem of project.gallery) {
        const image = await uploadImage(galleryItem.src);
        if (image) {
          gallery.push({
            _type: 'galleryImage',
            _key: Math.random().toString(36).substring(7),
            image,
            alt: galleryItem.alt,
          });
        }
      }
    }

    await client.create({
      _type: 'project',
      title: project.title,
      slug: { _type: 'slug', current: project.slug },
      location: project.location,
      description: project.description,
      ...(mainImage ? { image: mainImage } : {}),
      featured: project.featured ?? false,
      servicesCompleted: project.servicesCompleted,
      client: project.client,
      year: project.year,
      duration: project.duration,
      fullDescription: project.fullDescription,
      highlights: project.highlights,
      gallery: gallery.length > 0 ? gallery : undefined,
    });
  }

  console.log(`✅ Migrated ${projects.length} showcase projects`);
}

// Main migration function
async function migrate() {
  console.log('🚀 Starting Sanity Migration...');
  console.log(
    `   Project ID: ${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`
  );
  console.log(
    `   Dataset: ${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}`
  );

  if (!process.env.SANITY_API_TOKEN) {
    console.error(
      '\n❌ Error: SANITY_API_TOKEN environment variable is not set'
    );
    console.error(
      '   Please create a token at https://sanity.io/manage and add it to .env.local'
    );
    process.exit(1);
  }

  try {
    // Run migrations in order
    await migrateTeamMembers();
    await migrateClientCategories();
    await migrateOfficeLocations();
    await migrateProjectCategories();
    await migrateProcessSteps();
    await migrateProjects();

    console.log('\n🎉 Migration completed successfully!');
  } catch (error) {
    console.error('\n❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run the migration
migrate();
