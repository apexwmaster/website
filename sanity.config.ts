'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'
import { apexTheme } from './sanity/theme'
import { apiVersion, dataset, projectId } from './sanity/env'

export default defineConfig({
  name: 'apex-studio',
  title: 'APEX CMS',
  basePath: '/admin',
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
  },
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
  theme: apexTheme,
})
