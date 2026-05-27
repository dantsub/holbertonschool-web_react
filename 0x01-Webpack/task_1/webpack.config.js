const path = require('path');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    filename: "bundle.js",
    clean: true,
    path: path.resolve(__dirname, "public")
  },
};
