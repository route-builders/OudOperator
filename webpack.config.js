const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = [{
    entry: {
        "O_O": ['./src/index.ts'],
        "O_O.min": ['./src/index.ts'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js',
        umdNamedDefine: true,
        library: "O_O",
        libraryTarget: "umd",
        libraryExport: 'default',
    },
    module: {
        rules: [{
            test: /\.ts?$/,
            exclude: /node_modules/,
            use: [{
                    loader: 'babel-loader'
                },
                {
                    loader: 'ts-loader'
                }
            ]
        }],
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            include: /\.min\.js$/,
        })],
    },
    resolve: {
        extensions: ['.js', '.ts'],
    },
}, ]
