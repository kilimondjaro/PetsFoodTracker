const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.sourceExts.push('cjs');

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(
  (ext) => ext !== 'svg'
);

defaultConfig.resolver.sourceExts = [
  ...defaultConfig.resolver.sourceExts,
  'svg',
];

//   sourceExts: [...resolver.sourceExts, "svg"],

defaultConfig.resolver.resolverMainFields = [
  'sbmodern',
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

defaultConfig.transformer.babelTransformerPath = require.resolve(
  'react-native-svg-transformer'
);

defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders,
  './src/shared/storybook',
];

module.exports = defaultConfig;
