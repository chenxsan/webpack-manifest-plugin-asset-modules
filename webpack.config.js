const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')
module.exports = {
  experiments: {
    asset: true,
  },
  output: {
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'file-loader'
      },
    ],
  },
  plugins: [new ManifestPlugin()],
}
