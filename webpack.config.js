const path = require('path');

// for JetBrains IDE
module.exports = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  }
};
