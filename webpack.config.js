const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/iframeCommunication.js',
    output: {
        filename: 'iframeCommunication.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'IframeCommunication',
        // libraryTarget: 'window', // Attach it to the window object
        libraryTarget: 'umd', // Universal Module Definition
        umdNamedDefine: true,
        globalObject: 'this',
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()], // TerserPlugin for minification
    },
};
