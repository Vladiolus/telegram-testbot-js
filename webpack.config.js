module.exports = {
  //...
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    library: {
      type: 'module',
    },
  },
  experiments: {
    outputModule: true,
  },
};