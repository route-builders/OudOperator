const path = require('path')

module.exports = {
    mode: 'production',

    entry: './dist/index.js',
    output: {
        path: path.resolve(__dirname, 'browser'),
        filename: 'oud-operator.bundle.js',
    },
}
