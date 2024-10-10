const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/iframeCommunication.js',
    output: {
        filename: 'iframeCommunication.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'IframeCommunication',
        libraryTarget: 'umd',  // Universal Module Definition to support CommonJS, AMD, and browser globals
        globalObject: 'this',  // Ensures the library works in Node and the browser
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],  // Use Terser for minimization
    },
    module: {
        rules: [
            {
                test: /\.js$/, // Apply loader to JavaScript files
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',  // Optional: You can add Babel for ES6+ transpiling
                    options: {
                        presets: ['@babel/preset-env'],  // Preset for transpiling ES6+
                    },
                },
            },
        ],
    },
};