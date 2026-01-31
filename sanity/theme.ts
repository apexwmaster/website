import { buildLegacyTheme } from 'sanity';

// APEX brand colors
const apexOrange = '#ea7704';

// Neutrals
const white = '#ffffff';
const gray50 = '#fafafa';
const gray600 = '#525252';
const gray900 = '#171717';

export const apexTheme = buildLegacyTheme({
  // Brand
  '--brand-primary': apexOrange,

  // Component colors
  '--component-bg': white,
  '--component-text-color': gray900,

  // Default button
  '--default-button-color': gray600,
  '--default-button-primary-color': apexOrange,
  '--default-button-success-color': '#22c55e',
  '--default-button-warning-color': '#f59e0b',
  '--default-button-danger-color': '#ef4444',

  // Focus
  '--focus-color': apexOrange,

  // Main navigation
  '--main-navigation-color': gray900,
  '--main-navigation-color--inverted': white,

  // State colors
  '--state-info-color': apexOrange,
  '--state-success-color': '#22c55e',
  '--state-warning-color': '#f59e0b',
  '--state-danger-color': '#ef4444',
});
