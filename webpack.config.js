const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        home: './src/index.ts',
        auth: './src/auth.ts',
        dashboard: './src/dashboard.ts'
    },
    mode: 'development',
    devServer: {
        watchFiles: ['src/**/*'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i, // Add webp support
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]', // Keep the original file name and extension
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/index.html' , to: 'index.html' },
                { from: 'src/signin.html' , to: 'signin.html' },
                { from: 'src/userboard.html' , to: 'dashboard.html' }
            ]
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};