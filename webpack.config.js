module.exports = {
  entry: './client.js',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json', '.jsx']
  }
};
