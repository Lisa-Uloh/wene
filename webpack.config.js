const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //... (other configurations like entry, output)
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // ... (other rules for processing different types of files)
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
  //... (other configurations like plugins)
};
