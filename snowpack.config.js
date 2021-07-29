const path = require('path');
require('dotenv').config();

// export
module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  devOptions: {
    port: Number(process.env?.PORT || 3000),
    hostname: process.env?.HOST || '0.0.0.0',
    open: 'none',
    hmr: true,
  },
  buildOptions: {
    out: 'build',
    baseUrl: './',
    clean: true,
    metaUrlPath: '_snowpack',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
  },
  alias: {
    '~': path.resolve(__dirname, './src'),
  },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
  ],
}