// metro.config.js (root)
const { getDefaultConfig } = require('@expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// 👇 Wrap with NativeWind
module.exports = withNativeWind(config);
