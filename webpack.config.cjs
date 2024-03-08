const path = require('path');

module.exports = {
  entry: './src/main.jsx', // Update the entry file path accordingly
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Update the output directory accordingly
  },
};