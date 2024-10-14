const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/iframeCommunication.js',
    output: {
        filename: 'iframeCommunication.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'IframeCommunication', // Expose the class as a global variable
        libraryTarget: 'window', // Attach it to the window object
    },
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()], // TerserPlugin for minification
    },
};
