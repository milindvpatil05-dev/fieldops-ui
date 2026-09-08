module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      // React Native preset (handles TS + JSX); used for both src and node_modules
      'module:@react-native/babel-preset',
      // NativeWind preset
      'nativewind/babel',
    ],
  };
};
