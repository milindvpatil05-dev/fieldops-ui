// const path = require('path');
// const { getDefaultConfig } = require('@expo/metro-config');
// const { withMetroConfig } = require('react-native-monorepo-config');

// const root = path.resolve(__dirname, '..');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = withMetroConfig(getDefaultConfig(__dirname), {
//   root,
//   dirname: __dirname,
//   conditions: ['react-native-fieldops-ui-source'],
// });

// module.exports = withNativeWind(config, { input: "./global.css" });

const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { withMetroConfig } = require('react-native-monorepo-config');
const { withNativeWind } = require('nativewind/metro');

const root = path.resolve(__dirname, '..');

const config = withMetroConfig(getDefaultConfig(__dirname), {
  root,
  dirname: __dirname,
  conditions: ['react-native-fieldops-ui-source'],
});

module.exports = withNativeWind(config);
