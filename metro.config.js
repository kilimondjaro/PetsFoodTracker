const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');

defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders,
  './src/shared/storybook',
];

module.exports = defaultConfig;
