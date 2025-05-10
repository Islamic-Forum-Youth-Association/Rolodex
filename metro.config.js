// filepath: /Users/marz/Coding/rolodex/metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

// Find the workspace root (monorepo root)
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(projectRoot);

// Add monorepo support
config.watchFolders = [workspaceRoot];

// Add support for path aliases
config.resolver.extraNodeModules = {
  ...config.resolver.extraNodeModules,
  '@packages': path.resolve(workspaceRoot, 'packages'),
};

module.exports = config;