const path = require("path");
const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = async function (env, argv) {
    // NativeWind setup
    // https://www.nativewind.dev/quick-starts/expo#expo-web
    const config = await createExpoWebpackConfigAsync(
        {
            ...env,
            babel: {
                dangerouslyAddModulePathsToTranspile: ["nativewind"],
            },
        },
        argv
    );

    // fs cannot be polyfilled, so ignore it
    // https://github.com/Shopify/react-native-skia/blob/main/example/webpack.config.js
    // https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
    }

    config.module.rules.push({
        test: /\.css$/i,
        use: ["postcss-loader"],
    });

    // Polyfills the path module (does not polyfill fs)
    // https://shopify.github.io/react-native-skia/docs/getting-started/web#manual-webpack-installation
    config.plugins.push(new NodePolyfillPlugin());

    return config;
};