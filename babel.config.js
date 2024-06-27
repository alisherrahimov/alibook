module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@components': './src/components/',
          '@config': './src/config',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@screens': './src/screens/',
          '@fonts': './src/assets/fonts',
          '@api': './src/api',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
