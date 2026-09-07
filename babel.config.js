module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      // Bob preset for building your library
      'module:react-native-builder-bob/babel-preset',
      // React Native preset for node_modules
      '@babel/preset-env',
      'module:@react-native/babel-preset',
      'nativewind/babel',
    ],
    overrides: [
      {
        exclude: /\/node_modules\//,
        presets: ['module:react-native-builder-bob/babel-preset'],
      },
      {
        include: /\/node_modules\//,
        presets: ['module:@react-native/babel-preset'],
      },
    ],
  };
};
