module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["nativewind/babel"],
      ['module-resolver', {
        root: ['./'],
        alias: {
          'src': './src',
          'env': './env',
        },
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.web.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.web.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      }],
      '@babel/plugin-proposal-export-namespace-from',
      'react-native-reanimated/plugin',
    ],
  };
};
