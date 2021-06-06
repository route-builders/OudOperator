/** @type import('webpack').Configuration */
module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: "O_O.js",
    library: {
      type: "umd"
    },
    globalObject: "this"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: "tsconfig.json",
              // configFile: "webpack.tsconfig.json",
            }
          },
          // {
          //   loader: 'babel-loader'
          // },
        ],
      },
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'babel-loader'
      //     },
      //   ],
      // },
    ],
  },
  resolve: {
    extensions: [
      '.ts', ".js",
    ],
  },
};